import { 
  Scheme, 
  UserProfile, 
  BusinessCategory, 
  BusinessStage, 
  TurnoverRange, 
  EmployeeRange,
  schemes 
} from './schemes-data';

export interface EligibilityResult {
  scheme: Scheme;
  score: number;
  matchedCriteria: string[];
  unmatchedCriteria: string[];
  recommendation: 'highly_recommended' | 'recommended' | 'possible' | 'unlikely';
}

const TURNOVER_ORDER: TurnoverRange[] = [
  'none',
  'under_25l',
  '25l_1cr',
  '1cr_5cr',
  '5cr_25cr',
  'above_25cr'
];

const EMPLOYEE_ORDER: EmployeeRange[] = [
  'solo',
  '2_10',
  '11_50',
  '51_200',
  'above_200'
];

function getTurnoverIndex(turnover: TurnoverRange): number {
  return TURNOVER_ORDER.indexOf(turnover);
}

function getEmployeeIndex(employees: EmployeeRange): number {
  return EMPLOYEE_ORDER.indexOf(employees);
}

function checkTurnoverEligibility(
  userTurnover: TurnoverRange,
  maxTurnover?: TurnoverRange[],
  minTurnover?: TurnoverRange[]
): { eligible: boolean; message: string } {
  const userIndex = getTurnoverIndex(userTurnover);
  
  if (maxTurnover && maxTurnover.length > 0) {
    const maxIndex = Math.max(...maxTurnover.map(t => getTurnoverIndex(t)));
    if (userIndex > maxIndex) {
      return { 
        eligible: false, 
        message: `Turnover exceeds maximum limit` 
      };
    }
  }
  
  if (minTurnover && minTurnover.length > 0) {
    const minIndex = Math.min(...minTurnover.map(t => getTurnoverIndex(t)));
    if (userIndex < minIndex) {
      return { 
        eligible: false, 
        message: `Turnover below minimum requirement` 
      };
    }
  }
  
  return { eligible: true, message: 'Turnover requirement met' };
}

function checkEmployeeEligibility(
  userEmployees: EmployeeRange,
  eligibleRanges?: EmployeeRange[]
): { eligible: boolean; message: string } {
  if (!eligibleRanges || eligibleRanges.length === 0) {
    return { eligible: true, message: 'No employee count restriction' };
  }
  
  if (eligibleRanges.includes(userEmployees)) {
    return { eligible: true, message: 'Employee count requirement met' };
  }
  
  return { 
    eligible: false, 
    message: `Employee count outside eligible range` 
  };
}

function checkStateEligibility(
  userState: string,
  eligibleStates: string[] | 'all'
): { eligible: boolean; message: string } {
  if (eligibleStates === 'all') {
    return { eligible: true, message: 'Available across all states' };
  }
  
  if (eligibleStates.includes(userState)) {
    return { eligible: true, message: `Available in ${userState}` };
  }
  
  return { 
    eligible: false, 
    message: `Not available in ${userState}` 
  };
}

export function calculateEligibility(
  profile: UserProfile,
  scheme: Scheme
): EligibilityResult {
  const matchedCriteria: string[] = [];
  const unmatchedCriteria: string[] = [];
  let totalScore = 0;
  let maxScore = 0;

  // 1. Category match (25 points)
  maxScore += 25;
  if (scheme.eligibility.categories.includes(profile.businessCategory)) {
    matchedCriteria.push(`Business category (${profile.businessCategory}) is eligible`);
    totalScore += 25;
  } else {
    unmatchedCriteria.push(`Business category not in eligible list`);
  }

  // 2. Business stage match (20 points)
  maxScore += 20;
  if (scheme.eligibility.stages.includes(profile.businessStage)) {
    matchedCriteria.push(`Business stage (${profile.businessStage}) is eligible`);
    totalScore += 20;
  } else {
    unmatchedCriteria.push(`Business stage not eligible for this scheme`);
  }

  // 3. State eligibility (20 points)
  maxScore += 20;
  const stateCheck = checkStateEligibility(profile.state, scheme.eligibility.states);
  if (stateCheck.eligible) {
    matchedCriteria.push(stateCheck.message);
    totalScore += 20;
  } else {
    unmatchedCriteria.push(stateCheck.message);
  }

  // 4. Turnover eligibility (15 points)
  maxScore += 15;
  const turnoverCheck = checkTurnoverEligibility(
    profile.turnover,
    scheme.eligibility.maxTurnover,
    scheme.eligibility.minTurnover
  );
  if (turnoverCheck.eligible) {
    matchedCriteria.push(turnoverCheck.message);
    totalScore += 15;
  } else {
    unmatchedCriteria.push(turnoverCheck.message);
  }

  // 5. Employee count eligibility (10 points)
  maxScore += 10;
  const employeeCheck = checkEmployeeEligibility(
    profile.employees,
    scheme.eligibility.employeeRange
  );
  if (employeeCheck.eligible) {
    matchedCriteria.push(employeeCheck.message);
    totalScore += 10;
  } else {
    unmatchedCriteria.push(employeeCheck.message);
  }

  // 6. Interest alignment (10 points)
  maxScore += 10;
  const matchingInterests = profile.interests.filter(
    interest => scheme.eligibility.interestTypes.includes(interest)
  );
  if (matchingInterests.length > 0) {
    const interestScore = (matchingInterests.length / profile.interests.length) * 10;
    totalScore += interestScore;
    matchedCriteria.push(`Matches ${matchingInterests.length} of your interest areas`);
  } else {
    unmatchedCriteria.push('Interest areas do not match');
  }

  // 7. Special criteria bonuses
  // Women-owned business bonus for women-specific schemes
  if (profile.isWomenOwned && scheme.category === 'women') {
    matchedCriteria.push('Women-owned business - priority eligibility');
    totalScore += 10; // Bonus points
  }

  // SC/ST/OBC bonus for relevant schemes
  if (profile.isSC_ST_OBC && 
      (scheme.id === 'stand-up-india' || scheme.id === 'pmegp')) {
    matchedCriteria.push('SC/ST/OBC category - higher subsidy applicable');
    totalScore += 5; // Bonus points
  }

  // Calculate final percentage
  const score = Math.min(Math.round((totalScore / maxScore) * 100), 100);

  // Determine recommendation level
  let recommendation: EligibilityResult['recommendation'];
  if (score >= 80) {
    recommendation = 'highly_recommended';
  } else if (score >= 60) {
    recommendation = 'recommended';
  } else if (score >= 40) {
    recommendation = 'possible';
  } else {
    recommendation = 'unlikely';
  }

  return {
    scheme,
    score,
    matchedCriteria,
    unmatchedCriteria,
    recommendation
  };
}

export function findEligibleSchemes(profile: UserProfile): EligibilityResult[] {
  const results = schemes.map(scheme => calculateEligibility(profile, scheme));
  
  // Sort by score (highest first)
  return results.sort((a, b) => b.score - a.score);
}

export function getTopSchemes(profile: UserProfile, limit: number = 10): EligibilityResult[] {
  const results = findEligibleSchemes(profile);
  return results.slice(0, limit);
}

export function getSchemesByRecommendation(
  profile: UserProfile,
  recommendation: EligibilityResult['recommendation']
): EligibilityResult[] {
  const results = findEligibleSchemes(profile);
  return results.filter(r => r.recommendation === recommendation);
}

export function getHighlyRecommendedSchemes(profile: UserProfile): EligibilityResult[] {
  return getSchemesByRecommendation(profile, 'highly_recommended');
}

export function filterSchemesByCategory(
  results: EligibilityResult[],
  category: Scheme['category']
): EligibilityResult[] {
  return results.filter(r => r.scheme.category === category);
}

export function filterSchemesByMinScore(
  results: EligibilityResult[],
  minScore: number
): EligibilityResult[] {
  return results.filter(r => r.score >= minScore);
}

// Quick eligibility check - returns true if at least basic criteria match
export function quickEligibilityCheck(
  profile: UserProfile,
  scheme: Scheme
): boolean {
  // Must match category
  if (!scheme.eligibility.categories.includes(profile.businessCategory)) {
    return false;
  }
  
  // Must match stage
  if (!scheme.eligibility.stages.includes(profile.businessStage)) {
    return false;
  }
  
  // Must match state
  if (scheme.eligibility.states !== 'all' && 
      !scheme.eligibility.states.includes(profile.state)) {
    return false;
  }
  
  return true;
}

// Get schemes count by category for a user profile
export function getSchemesCountByCategory(profile: UserProfile): Record<Scheme['category'], number> {
  const results = findEligibleSchemes(profile);
  const eligibleResults = results.filter(r => r.score >= 40);
  
  const counts: Record<Scheme['category'], number> = {
    startup: 0,
    technology: 0,
    solar: 0,
    manufacturing: 0,
    innovation: 0,
    msme: 0,
    women: 0
  };
  
  eligibleResults.forEach(result => {
    counts[result.scheme.category]++;
  });
  
  return counts;
}

// Get summary statistics for results
export function getResultsSummary(results: EligibilityResult[]): {
  total: number;
  highlyRecommended: number;
  recommended: number;
  possible: number;
  averageScore: number;
  topCategories: Array<{ category: Scheme['category']; count: number }>;
} {
  const total = results.length;
  const highlyRecommended = results.filter(r => r.recommendation === 'highly_recommended').length;
  const recommended = results.filter(r => r.recommendation === 'recommended').length;
  const possible = results.filter(r => r.recommendation === 'possible').length;
  const averageScore = results.length > 0 
    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
    : 0;

  // Count by category
  const categoryCount: Record<Scheme['category'], number> = {
    startup: 0,
    technology: 0,
    solar: 0,
    manufacturing: 0,
    innovation: 0,
    msme: 0,
    women: 0
  };
  
  results.forEach(r => {
    if (r.score >= 40) {
      categoryCount[r.scheme.category]++;
    }
  });

  const topCategories = Object.entries(categoryCount)
    .map(([category, count]) => ({ category: category as Scheme['category'], count }))
    .filter(c => c.count > 0)
    .sort((a, b) => b.count - a.count);

  return {
    total,
    highlyRecommended,
    recommended,
    possible,
    averageScore,
    topCategories
  };
}

