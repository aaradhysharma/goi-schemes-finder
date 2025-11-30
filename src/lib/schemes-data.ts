export type BusinessCategory = 
  | 'technology'
  | 'ai_ml'
  | 'solar_renewable'
  | 'manufacturing'
  | 'services'
  | 'agriculture'
  | 'healthcare'
  | 'education'
  | 'fintech'
  | 'ecommerce';

export type BusinessStage = 'idea' | 'startup' | 'growth' | 'established';

export type TurnoverRange = 
  | 'none'
  | 'under_25l'
  | '25l_1cr'
  | '1cr_5cr'
  | '5cr_25cr'
  | 'above_25cr';

export type EmployeeRange = 
  | 'solo'
  | '2_10'
  | '11_50'
  | '51_200'
  | 'above_200';

export type InterestType = 
  | 'funding'
  | 'subsidy'
  | 'tax_benefits'
  | 'training'
  | 'infrastructure'
  | 'mentorship'
  | 'market_access';

export interface Scheme {
  id: string;
  name: string;
  shortName: string;
  ministry: string;
  description: string;
  benefits: string[];
  maxBenefit: string;
  eligibility: {
    categories: BusinessCategory[];
    stages: BusinessStage[];
    maxTurnover?: TurnoverRange[];
    minTurnover?: TurnoverRange[];
    employeeRange?: EmployeeRange[];
    states: string[] | 'all';
    interestTypes: InterestType[];
    additionalCriteria: string[];
  };
  applicationProcess: string[];
  documents: string[];
  officialUrl: string;
  deadline?: string;
  featured: boolean;
  category: 'startup' | 'technology' | 'solar' | 'manufacturing' | 'innovation' | 'msme' | 'women';
}

export interface UserProfile {
  state: string;
  businessCategory: BusinessCategory;
  businessStage: BusinessStage;
  turnover: TurnoverRange;
  employees: EmployeeRange;
  interests: InterestType[];
  isWomenOwned: boolean;
  isSC_ST_OBC: boolean;
}

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

export const BUSINESS_CATEGORIES: { value: BusinessCategory; label: string; icon: string }[] = [
  { value: 'technology', label: 'Technology & IT', icon: '💻' },
  { value: 'ai_ml', label: 'AI & Machine Learning', icon: '🤖' },
  { value: 'solar_renewable', label: 'Solar & Renewable Energy', icon: '☀️' },
  { value: 'manufacturing', label: 'Manufacturing', icon: '🏭' },
  { value: 'services', label: 'Services', icon: '🛎️' },
  { value: 'agriculture', label: 'AgriTech', icon: '🌾' },
  { value: 'healthcare', label: 'Healthcare & MedTech', icon: '🏥' },
  { value: 'education', label: 'EdTech', icon: '📚' },
  { value: 'fintech', label: 'FinTech', icon: '💳' },
  { value: 'ecommerce', label: 'E-Commerce', icon: '🛒' },
];

export const BUSINESS_STAGES: { value: BusinessStage; label: string; description: string }[] = [
  { value: 'idea', label: 'Idea Stage', description: 'Just starting, no formal business yet' },
  { value: 'startup', label: 'Early Startup', description: 'Registered business, less than 3 years old' },
  { value: 'growth', label: 'Growth Stage', description: '3-7 years, scaling operations' },
  { value: 'established', label: 'Established', description: 'More than 7 years, stable business' },
];

export const TURNOVER_RANGES: { value: TurnoverRange; label: string }[] = [
  { value: 'none', label: 'No revenue yet' },
  { value: 'under_25l', label: 'Under ₹25 Lakhs' },
  { value: '25l_1cr', label: '₹25 Lakhs - ₹1 Crore' },
  { value: '1cr_5cr', label: '₹1 Crore - ₹5 Crores' },
  { value: '5cr_25cr', label: '₹5 Crores - ₹25 Crores' },
  { value: 'above_25cr', label: 'Above ₹25 Crores' },
];

export const EMPLOYEE_RANGES: { value: EmployeeRange; label: string }[] = [
  { value: 'solo', label: 'Just me (Solo founder)' },
  { value: '2_10', label: '2-10 employees' },
  { value: '11_50', label: '11-50 employees' },
  { value: '51_200', label: '51-200 employees' },
  { value: 'above_200', label: '200+ employees' },
];

export const INTEREST_TYPES: { value: InterestType; label: string; icon: string }[] = [
  { value: 'funding', label: 'Funding & Loans', icon: '💰' },
  { value: 'subsidy', label: 'Subsidies & Grants', icon: '🎁' },
  { value: 'tax_benefits', label: 'Tax Benefits', icon: '📋' },
  { value: 'training', label: 'Training & Skills', icon: '🎓' },
  { value: 'infrastructure', label: 'Infrastructure Support', icon: '🏢' },
  { value: 'mentorship', label: 'Mentorship', icon: '👨‍🏫' },
  { value: 'market_access', label: 'Market Access', icon: '🌍' },
];

export const schemes: Scheme[] = [
  // STARTUP & ENTREPRENEURSHIP
  {
    id: 'startup-india',
    name: 'Startup India Initiative',
    shortName: 'Startup India',
    ministry: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
    description: 'Flagship initiative to build a strong ecosystem for nurturing innovation and Startups in India. Provides recognition, tax benefits, easier compliance, and access to funding.',
    benefits: [
      'Self-certification for 6 labor and 3 environmental laws',
      'Tax exemption for 3 consecutive years (80IAC)',
      'Exemption from Angel Tax under Section 56(2)(viib)',
      'Fast-track patent application at 80% rebate',
      'Easy winding up of company within 90 days',
      'Access to Fund of Funds worth ₹10,000 crores'
    ],
    maxBenefit: 'Tax exemption + Access to ₹10,000 Cr Fund of Funds',
    eligibility: {
      categories: ['technology', 'ai_ml', 'solar_renewable', 'manufacturing', 'services', 'agriculture', 'healthcare', 'education', 'fintech', 'ecommerce'],
      stages: ['idea', 'startup', 'growth'],
      maxTurnover: ['none', 'under_25l', '25l_1cr', '1cr_5cr', '5cr_25cr'],
      states: 'all',
      interestTypes: ['funding', 'tax_benefits', 'mentorship'],
      additionalCriteria: [
        'Entity must be less than 10 years old',
        'Turnover should not exceed ₹100 crore in any year',
        'Working towards innovation, development or improvement of products/processes/services'
      ]
    },
    applicationProcess: [
      'Register on Startup India portal (startupindia.gov.in)',
      'Fill in the application form with business details',
      'Upload required documents including Certificate of Incorporation',
      'Submit self-certification for eligibility',
      'Get DPIIT recognition number within 2-3 days'
    ],
    documents: [
      'Certificate of Incorporation/Registration',
      'PAN of the entity',
      'Brief description of innovation',
      'Director/Partner details with PAN'
    ],
    officialUrl: 'https://www.startupindia.gov.in/',
    featured: true,
    category: 'startup'
  },
  {
    id: 'mudra-yojana',
    name: 'Pradhan Mantri MUDRA Yojana',
    shortName: 'PMMY/MUDRA',
    ministry: 'Ministry of Finance',
    description: 'Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises. Three products: Shishu (up to ₹50,000), Kishore (₹50,000-5 lakh), and Tarun (₹5-10 lakh).',
    benefits: [
      'Collateral-free loans up to ₹10 lakhs',
      'Shishu: Up to ₹50,000 for startups',
      'Kishore: ₹50,000 to ₹5 lakhs for growing businesses',
      'Tarun: ₹5 lakhs to ₹10 lakhs for established units',
      'No processing fee',
      'Flexible repayment period of 5-7 years'
    ],
    maxBenefit: 'Up to ₹10 Lakhs collateral-free loan',
    eligibility: {
      categories: ['technology', 'manufacturing', 'services', 'ecommerce'],
      stages: ['idea', 'startup', 'growth'],
      maxTurnover: ['none', 'under_25l', '25l_1cr'],
      employeeRange: ['solo', '2_10', '11_50'],
      states: 'all',
      interestTypes: ['funding'],
      additionalCriteria: [
        'Non-corporate small business segment',
        'Should not be defaulter of any bank/financial institution',
        'Valid KYC documents required'
      ]
    },
    applicationProcess: [
      'Visit any PSU bank, private bank, or MFI',
      'Fill MUDRA loan application form',
      'Submit business plan and required documents',
      'Bank processes application and disburses loan',
      'Apply online via Udyami Mitra portal'
    ],
    documents: [
      'Identity proof (Aadhaar/PAN)',
      'Address proof',
      'Business proof (if existing)',
      'Bank statements (6 months)',
      'Quotation for machinery/equipment (if applicable)'
    ],
    officialUrl: 'https://www.mudra.org.in/',
    featured: true,
    category: 'msme'
  },
  {
    id: 'stand-up-india',
    name: 'Stand Up India Scheme',
    shortName: 'Stand Up India',
    ministry: 'Ministry of Finance',
    description: 'Facilitates bank loans between ₹10 lakh and ₹1 crore to at least one SC/ST and one woman entrepreneur per bank branch for setting up greenfield enterprise.',
    benefits: [
      'Loans from ₹10 lakhs to ₹1 crore',
      'Composite loan covering term loan and working capital',
      'Margin money of up to 25% can be provided',
      'Interest rate as per RBI guidelines',
      'Repayment period up to 7 years with moratorium up to 18 months'
    ],
    maxBenefit: 'Up to ₹1 Crore bank loan',
    eligibility: {
      categories: ['technology', 'ai_ml', 'solar_renewable', 'manufacturing', 'services', 'agriculture', 'healthcare', 'education', 'fintech', 'ecommerce'],
      stages: ['idea', 'startup'],
      states: 'all',
      interestTypes: ['funding'],
      additionalCriteria: [
        'SC/ST and/or woman entrepreneurs',
        'Above 18 years of age',
        'Should not be a defaulter',
        'For greenfield (new) projects only',
        '51% ownership by SC/ST or woman'
      ]
    },
    applicationProcess: [
      'Visit Stand Up India portal (standupmitra.in)',
      'Register and fill online application',
      'Connect with Lead District Manager (LDM)',
      'Submit application at nearby bank branch',
      'Loan sanctioned within 15 days of application'
    ],
    documents: [
      'Identity and address proof',
      'Caste certificate (for SC/ST)',
      'Project report',
      'Proof of business premises',
      'Quotations for machinery'
    ],
    officialUrl: 'https://www.standupmitra.in/',
    featured: true,
    category: 'women'
  },
  // TECHNOLOGY & AI
  {
    id: 'meity-startup-hub',
    name: 'MeitY Startup Hub (MSH)',
    shortName: 'MSH',
    ministry: 'Ministry of Electronics and Information Technology',
    description: 'Promotes tech startups through incubation support, funding access, mentorship, and market connect for IT and electronics sector startups.',
    benefits: [
      'Seed funding up to ₹25 lakhs',
      'Access to 50+ incubators across India',
      'Mentorship from industry experts',
      'Market access and pilot opportunities',
      'Connect with investors and corporates',
      'Free cloud credits and tech tools'
    ],
    maxBenefit: 'Up to ₹25 Lakhs seed funding + incubation',
    eligibility: {
      categories: ['technology', 'ai_ml', 'fintech', 'ecommerce', 'healthcare', 'education'],
      stages: ['idea', 'startup'],
      maxTurnover: ['none', 'under_25l', '25l_1cr'],
      states: 'all',
      interestTypes: ['funding', 'mentorship', 'infrastructure'],
      additionalCriteria: [
        'IT/Electronics/Deep tech focused startup',
        'Innovative product or service',
        'Scalable business model',
        'Indian registered entity'
      ]
    },
    applicationProcess: [
      'Register on MeitY Startup Hub portal',
      'Submit startup profile and pitch deck',
      'Apply for suitable program/scheme',
      'Evaluation by expert committee',
      'Selection and onboarding'
    ],
    documents: [
      'Certificate of Incorporation',
      'Startup India recognition (if available)',
      'Pitch deck and business plan',
      'Founder details and background'
    ],
    officialUrl: 'https://meitystartuphub.in/',
    featured: true,
    category: 'technology'
  },
  {
    id: 'tide-2',
    name: 'Technology Incubation and Development of Entrepreneurs (TIDE 2.0)',
    shortName: 'TIDE 2.0',
    ministry: 'Ministry of Electronics and Information Technology',
    description: 'Promotes tech entrepreneurship through financial and technical support to incubators and startups in emerging technologies like AI, Blockchain, IoT, etc.',
    benefits: [
      'Financial assistance up to ₹7 crores for incubators',
      'EIR (Entrepreneur-in-Residence) support up to ₹30,000/month',
      'Pre-incubation support up to ₹10 lakhs',
      'Access to state-of-the-art facilities',
      'Networking opportunities'
    ],
    maxBenefit: 'EIR stipend + Pre-incubation support up to ₹10 lakhs',
    eligibility: {
      categories: ['technology', 'ai_ml', 'fintech', 'healthcare'],
      stages: ['idea', 'startup'],
      maxTurnover: ['none', 'under_25l'],
      states: 'all',
      interestTypes: ['funding', 'mentorship', 'infrastructure', 'training'],
      additionalCriteria: [
        'Focus on emerging technologies',
        'Must join through TIDE 2.0 incubator',
        'Innovative tech solution'
      ]
    },
    applicationProcess: [
      'Identify TIDE 2.0 supported incubator',
      'Apply to incubator with business idea',
      'Evaluation and selection by incubator',
      'Get access to TIDE 2.0 benefits'
    ],
    documents: [
      'Business idea/concept note',
      'Founder credentials',
      'Technical feasibility document'
    ],
    officialUrl: 'https://tide.meitystartuphub.in/',
    featured: false,
    category: 'technology'
  },
  {
    id: 'nasscom-deeptech',
    name: 'NASSCOM DeepTech Club',
    shortName: 'DeepTech Club',
    ministry: 'NASSCOM (Industry Body)',
    description: 'Supports deep tech startups in AI, ML, IoT, Blockchain, AR/VR, Robotics through funding, mentorship, and market access.',
    benefits: [
      'Access to corporate innovation programs',
      'Funding connect with VCs and angels',
      'Go-to-market support',
      'Technology partnerships',
      'Global market access'
    ],
    maxBenefit: 'Funding connect + Corporate partnerships',
    eligibility: {
      categories: ['ai_ml', 'technology'],
      stages: ['startup', 'growth'],
      states: 'all',
      interestTypes: ['funding', 'mentorship', 'market_access'],
      additionalCriteria: [
        'Deep tech focused (AI/ML/IoT/Blockchain)',
        'Working prototype or MVP',
        'Scalable solution'
      ]
    },
    applicationProcess: [
      'Apply through NASSCOM portal',
      'Pitch to selection committee',
      'Get inducted into DeepTech Club',
      'Access all benefits and programs'
    ],
    documents: [
      'Company registration',
      'Product documentation',
      'Technical architecture'
    ],
    officialUrl: 'https://nasscom.in/deeptech/',
    featured: false,
    category: 'technology'
  },
  {
    id: 'pli-it-hardware',
    name: 'PLI Scheme for IT Hardware',
    shortName: 'PLI IT Hardware',
    ministry: 'Ministry of Electronics and Information Technology',
    description: 'Production Linked Incentive scheme for IT Hardware manufacturing including laptops, tablets, servers, and storage devices.',
    benefits: [
      '4-2-1% incentive over 6 years on incremental sales',
      'Total outlay of ₹17,000 crores',
      'Support for domestic manufacturing',
      'Technology upgrade support',
      'Employment generation incentives'
    ],
    maxBenefit: 'Up to 4% incentive on incremental sales',
    eligibility: {
      categories: ['technology', 'manufacturing'],
      stages: ['growth', 'established'],
      minTurnover: ['5cr_25cr', 'above_25cr'],
      employeeRange: ['51_200', 'above_200'],
      states: 'all',
      interestTypes: ['subsidy', 'infrastructure'],
      additionalCriteria: [
        'Manufacturing of laptops, tablets, all-in-one PCs, servers',
        'Incremental investment threshold: ₹20 crores for domestic, ₹1,000 crores for global',
        'Minimum sales threshold requirements'
      ]
    },
    applicationProcess: [
      'Apply on official PLI portal during window',
      'Submit application with investment plan',
      'Evaluation by MeitY',
      'Letter of approval issued',
      'Annual claims based on incremental production'
    ],
    documents: [
      'Certificate of Incorporation',
      'Financial statements',
      'Investment plan',
      'Production capacity details'
    ],
    officialUrl: 'https://www.meity.gov.in/pli-scheme',
    featured: false,
    category: 'manufacturing'
  },
  // SOLAR & RENEWABLE ENERGY
  {
    id: 'pm-surya-ghar',
    name: 'PM Surya Ghar: Muft Bijli Yojana',
    shortName: 'PM Surya Ghar',
    ministry: 'Ministry of New and Renewable Energy',
    description: 'Provides subsidy for rooftop solar installation for residential consumers. Aims to provide 300 units of free electricity per month to households.',
    benefits: [
      '₹30,000 subsidy for 1kW system',
      '₹60,000 subsidy for 2kW system',
      '₹78,000 subsidy for 3kW and above',
      'Low-interest loans available',
      'Net metering benefits',
      'Up to 300 units free electricity monthly'
    ],
    maxBenefit: 'Up to ₹78,000 subsidy + free electricity',
    eligibility: {
      categories: ['solar_renewable'],
      stages: ['idea', 'startup', 'growth', 'established'],
      states: 'all',
      interestTypes: ['subsidy'],
      additionalCriteria: [
        'Residential electricity consumers',
        'Grid-connected rooftop solar only',
        'Must apply through DISCOM',
        'Suitable roof space required'
      ]
    },
    applicationProcess: [
      'Register on National Portal (pmsuryaghar.gov.in)',
      'Apply through local DISCOM',
      'Get feasibility study done',
      'Install through empaneled vendor',
      'Subsidy credited after commissioning'
    ],
    documents: [
      'Electricity bill copy',
      'ID proof',
      'Bank account details',
      'Roof ownership proof'
    ],
    officialUrl: 'https://pmsuryaghar.gov.in/',
    featured: true,
    category: 'solar'
  },
  {
    id: 'kusum-scheme',
    name: 'PM-KUSUM (Kisan Urja Suraksha evam Utthaan Mahabhiyan)',
    shortName: 'PM-KUSUM',
    ministry: 'Ministry of New and Renewable Energy',
    description: 'Aims to add 25,750 MW solar capacity through installation of standalone solar pumps, solarization of grid-connected pumps, and solar power plants on barren land.',
    benefits: [
      '60% subsidy for solar pumps (30% Central + 30% State)',
      'Farmer pays only 40%',
      'Income from selling surplus power to grid',
      '25-year power purchase agreement available',
      'Reduced dependence on diesel and grid'
    ],
    maxBenefit: '60% subsidy on solar pumps + income from power sales',
    eligibility: {
      categories: ['solar_renewable', 'agriculture'],
      stages: ['idea', 'startup', 'growth', 'established'],
      states: 'all',
      interestTypes: ['subsidy', 'infrastructure'],
      additionalCriteria: [
        'Farmers and farmer groups',
        'Agricultural land owners',
        'Water bodies/ponds for pump installation',
        'Barren/fallow land for solar plants'
      ]
    },
    applicationProcess: [
      'Apply through state nodal agency',
      'Site inspection and feasibility',
      'Pay farmer share',
      'Installation by approved vendors',
      'Grid connection (if applicable)'
    ],
    documents: [
      'Land ownership documents',
      'Aadhaar card',
      'Bank account details',
      'Existing electricity connection proof'
    ],
    officialUrl: 'https://mnre.gov.in/pm-kusum/',
    featured: false,
    category: 'solar'
  },
  {
    id: 'capex-subsidy-solar',
    name: 'CFA for Grid-Connected Rooftop Solar (Commercial/Industrial)',
    shortName: 'Solar CFA',
    ministry: 'Ministry of New and Renewable Energy',
    description: 'Central Financial Assistance for setting up grid-connected rooftop solar plants in commercial and industrial establishments.',
    benefits: [
      'Financial assistance for C&I segment',
      'Accelerated depreciation benefits',
      'Net metering allowed',
      'Reduced electricity bills',
      'Green energy certification'
    ],
    maxBenefit: 'Varies by state + tax benefits',
    eligibility: {
      categories: ['solar_renewable', 'manufacturing', 'technology', 'services'],
      stages: ['startup', 'growth', 'established'],
      states: 'all',
      interestTypes: ['subsidy', 'tax_benefits'],
      additionalCriteria: [
        'Commercial or industrial establishment',
        'Adequate roof space',
        'Grid connectivity available',
        'Comply with local DISCOM norms'
      ]
    },
    applicationProcess: [
      'Apply through state DISCOM',
      'Technical feasibility assessment',
      'Installation by empaneled vendor',
      'Net metering installation',
      'Claim CFA post commissioning'
    ],
    documents: [
      'Business registration',
      'Electricity bill',
      'Roof ownership/lease',
      'Project proposal'
    ],
    officialUrl: 'https://solarrooftop.gov.in/',
    featured: false,
    category: 'solar'
  },
  // MANUFACTURING & MSME
  {
    id: 'pmegp',
    name: 'Prime Minister Employment Generation Programme',
    shortName: 'PMEGP',
    ministry: 'Ministry of MSME',
    description: 'Credit-linked subsidy scheme for setting up new micro enterprises in non-farm sector. Generates employment through establishment of micro enterprises.',
    benefits: [
      'Subsidy up to 35% in rural areas, 25% in urban',
      'Higher subsidy for SC/ST/Women/Minorities (additional 10%)',
      'Project cost up to ₹50 lakhs for manufacturing',
      'Project cost up to ₹20 lakhs for services',
      'No income ceiling'
    ],
    maxBenefit: 'Up to 35% subsidy on project cost',
    eligibility: {
      categories: ['manufacturing', 'services', 'technology'],
      stages: ['idea', 'startup'],
      maxTurnover: ['none', 'under_25l'],
      states: 'all',
      interestTypes: ['funding', 'subsidy'],
      additionalCriteria: [
        'Age above 18 years',
        'Minimum 8th pass for projects above ₹10 lakhs',
        'New projects only (not for existing units)',
        'No income ceiling for applicants'
      ]
    },
    applicationProcess: [
      'Apply online on KVIC portal (kviconline.gov.in)',
      'Interview at District Task Force Committee',
      'Sanction by bank',
      'Start unit and maintain for 3 years',
      'Subsidy released to bank account'
    ],
    documents: [
      'Educational certificates',
      'ID and address proof',
      'EDP training certificate',
      'Project report',
      'Caste certificate (if applicable)'
    ],
    officialUrl: 'https://www.kviconline.gov.in/pmegpeportal/',
    featured: true,
    category: 'msme'
  },
  {
    id: 'cgtmse',
    name: 'Credit Guarantee Fund Trust for Micro and Small Enterprises',
    shortName: 'CGTMSE',
    ministry: 'Ministry of MSME',
    description: 'Provides credit guarantee to banks for collateral-free loans up to ₹5 crore to MSEs. Enables easier access to bank credit without collateral.',
    benefits: [
      'Collateral-free loans up to ₹5 crores',
      'Guarantee coverage up to 85% for micro enterprises',
      '75% coverage for small enterprises',
      'Encourages banks to lend to MSEs',
      'Available through all banks'
    ],
    maxBenefit: 'Collateral-free loan up to ₹5 Crores',
    eligibility: {
      categories: ['technology', 'ai_ml', 'manufacturing', 'services', 'healthcare', 'education'],
      stages: ['startup', 'growth'],
      maxTurnover: ['under_25l', '25l_1cr', '1cr_5cr'],
      employeeRange: ['solo', '2_10', '11_50'],
      states: 'all',
      interestTypes: ['funding'],
      additionalCriteria: [
        'Micro or Small Enterprise as per MSME definition',
        'New or existing enterprise',
        'Both manufacturing and service sector'
      ]
    },
    applicationProcess: [
      'Approach any scheduled commercial bank/NBFC',
      'Apply for MSME loan',
      'Bank sanctions loan and applies for CGTMSE coverage',
      'Loan disbursed without collateral'
    ],
    documents: [
      'Udyam registration',
      'Business plan',
      'Financial projections',
      'KYC documents'
    ],
    officialUrl: 'https://www.cgtmse.in/',
    featured: false,
    category: 'msme'
  },
  {
    id: 'clcss',
    name: 'Credit Linked Capital Subsidy Scheme',
    shortName: 'CLCSS',
    ministry: 'Ministry of MSME',
    description: 'Provides 15% capital subsidy for technology upgradation in specified sub-sectors for MSMEs.',
    benefits: [
      '15% capital subsidy on institutional credit',
      'Maximum subsidy of ₹15 lakhs',
      'For technology upgradation',
      'Available across 51 sub-sectors',
      'Can be combined with bank loan'
    ],
    maxBenefit: 'Up to ₹15 Lakhs capital subsidy',
    eligibility: {
      categories: ['manufacturing', 'technology'],
      stages: ['startup', 'growth', 'established'],
      states: 'all',
      interestTypes: ['subsidy'],
      additionalCriteria: [
        'Small scale sector only',
        'Technology upgradation in specified sub-sectors',
        'Should not have availed CLCSS earlier',
        'Loan from eligible financial institutions'
      ]
    },
    applicationProcess: [
      'Approach nodal bank/agency',
      'Submit application with project details',
      'Loan sanction by bank',
      'Subsidy claimed through nodal agency'
    ],
    documents: [
      'Udyam registration',
      'Quotation for machinery',
      'Bank loan sanction letter',
      'Business financials'
    ],
    officialUrl: 'https://www.dcmsme.gov.in/schemes/clcss.htm',
    featured: false,
    category: 'msme'
  },
  {
    id: 'aspire-scheme',
    name: 'ASPIRE (A Scheme for Promotion of Innovation, Rural Industries and Entrepreneurship)',
    shortName: 'ASPIRE',
    ministry: 'Ministry of MSME',
    description: 'Promotes innovation and rural entrepreneurship through Livelihood Business Incubators (LBI) and Technology Business Incubators (TBI).',
    benefits: [
      'Grant up to ₹1 crore for LBI/TBI',
      'Seed capital up to ₹1 crore for startups',
      'Focus on agro-rural industry',
      'Skill development and incubation',
      'Employment generation in rural areas'
    ],
    maxBenefit: 'Up to ₹1 Crore grant/seed capital',
    eligibility: {
      categories: ['agriculture', 'manufacturing', 'technology'],
      stages: ['idea', 'startup'],
      states: 'all',
      interestTypes: ['funding', 'infrastructure', 'training'],
      additionalCriteria: [
        'Focus on agro-rural sector',
        'Innovation and entrepreneurship promotion',
        'Apply through approved LBI/TBI'
      ]
    },
    applicationProcess: [
      'Apply through Ministry of MSME portal',
      'Submit proposal for LBI/TBI or startup',
      'Evaluation by Screening Committee',
      'Approval and fund release'
    ],
    documents: [
      'Proposal document',
      'Registration details',
      'Project report'
    ],
    officialUrl: 'https://aspire.msme.gov.in/',
    featured: false,
    category: 'innovation'
  },
  {
    id: 'sfurti-scheme',
    name: 'Scheme of Fund for Regeneration of Traditional Industries (SFURTI)',
    shortName: 'SFURTI',
    ministry: 'Ministry of MSME',
    description: 'Organizes traditional industries and artisans into clusters to make them competitive and provide support for their long-term sustainability.',
    benefits: [
      'Grant up to ₹5 crores for Heritage Clusters (1000-2500 artisans)',
      'Grant up to ₹2.5 crores for Major Clusters (500-1000 artisans)',
      'Grant up to ₹1 crore for Mini Clusters (up to 500 artisans)',
      'Infrastructure and skill development support',
      'Market promotion assistance'
    ],
    maxBenefit: 'Up to ₹5 Crores grant for clusters',
    eligibility: {
      categories: ['manufacturing', 'agriculture', 'services'], // Traditional industries often fall here
      stages: ['growth', 'established'],
      states: 'all',
      interestTypes: ['funding', 'infrastructure', 'training', 'market_access'],
      additionalCriteria: [
        'Traditional industry artisans/clusters',
        'Khadi, Coir, Village Industries',
        'Project proposed by Implementing Agency'
      ]
    },
    applicationProcess: [
      'Identify potential cluster',
      'Prepare Diagnostic Study Report (DSR)',
      'Submit proposal to Nodal Agency (KVIC/Coir Board)',
      'Approval by Scheme Steering Committee',
      'Implementation via Implementing Agency'
    ],
    documents: [
      'Diagnostic Study Report',
      'Detailed Project Report (DPR)',
      'Cluster details'
    ],
    officialUrl: 'https://sfurti.msme.gov.in/',
    featured: false,
    category: 'msme'
  },
  // INNOVATION
  {
    id: 'aim-atal-incubation',
    name: 'Atal Incubation Centers (AIC)',
    shortName: 'AIC',
    ministry: 'NITI Aayog - Atal Innovation Mission',
    description: 'Establishes world-class incubation centers across India to support startups with infrastructure, mentoring, and funding access.',
    benefits: [
      'Grant up to ₹10 crores for setting up incubators',
      'Access to AIC facilities for startups',
      'Mentorship and investor connect',
      'Seed funding through AIM programs',
      'Networking with 70+ AICs across India'
    ],
    maxBenefit: 'Access to world-class incubation + seed funding',
    eligibility: {
      categories: ['technology', 'ai_ml', 'solar_renewable', 'manufacturing', 'services', 'agriculture', 'healthcare', 'education', 'fintech', 'ecommerce'],
      stages: ['idea', 'startup'],
      states: 'all',
      interestTypes: ['funding', 'mentorship', 'infrastructure', 'training'],
      additionalCriteria: [
        'Innovative business idea',
        'Apply through AIC in your region',
        'Scalable solution',
        'Committed founding team'
      ]
    },
    applicationProcess: [
      'Identify nearest Atal Incubation Center',
      'Apply through AIC portal',
      'Pitch to selection committee',
      'Join incubation program',
      'Access all AIM benefits'
    ],
    documents: [
      'Pitch deck',
      'Founder profiles',
      'MVP/prototype demo (if available)',
      'Business model canvas'
    ],
    officialUrl: 'https://aim.gov.in/atal-incubation-centers.php',
    featured: true,
    category: 'innovation'
  },
  {
    id: 'samridh',
    name: 'SAMRIDH Scheme',
    shortName: 'SAMRIDH',
    ministry: 'Ministry of Electronics and Information Technology',
    description: 'Startup Accelerators of MeitY for Product Innovation, Development and Growth. Provides funding and support through existing accelerators.',
    benefits: [
      'Investment up to ₹40 lakhs per startup',
      'Accelerator program access',
      'Mentorship from industry experts',
      'Market connect and investor access',
      'Demo days and pitch opportunities'
    ],
    maxBenefit: 'Up to ₹40 Lakhs investment + acceleration',
    eligibility: {
      categories: ['technology', 'ai_ml', 'fintech', 'healthcare', 'education', 'ecommerce'],
      stages: ['startup'],
      maxTurnover: ['none', 'under_25l', '25l_1cr'],
      states: 'all',
      interestTypes: ['funding', 'mentorship', 'market_access'],
      additionalCriteria: [
        'DPIIT recognized startup',
        'Product-based startup',
        'Technology focus',
        'Apply through SAMRIDH accelerator'
      ]
    },
    applicationProcess: [
      'Apply through empaneled SAMRIDH accelerator',
      'Selection through accelerator process',
      'Join acceleration cohort',
      'Receive funding in tranches',
      'Graduation and investor connect'
    ],
    documents: [
      'DPIIT recognition',
      'Pitch deck',
      'Product documentation',
      'Financial projections'
    ],
    officialUrl: 'https://samridh.meitystartuphub.in/',
    featured: false,
    category: 'innovation'
  },
  {
    id: 'nidhi-prayas',
    name: 'NIDHI-PRAYAS (Promoting and Accelerating Young and Aspiring Innovators & Startups)',
    shortName: 'NIDHI-PRAYAS',
    ministry: 'Department of Science and Technology',
    description: 'Supports innovators to transform their ideas into prototype. Provides grant support and access to PRAYAS centers.',
    benefits: [
      'Grant up to ₹10 lakhs for prototyping',
      'Access to fabrication facilities',
      'Mentorship support',
      '9-18 months program duration',
      'Connect with NIDHI ecosystem'
    ],
    maxBenefit: 'Up to ₹10 Lakhs grant for prototype development',
    eligibility: {
      categories: ['technology', 'ai_ml', 'healthcare', 'manufacturing', 'agriculture'],
      stages: ['idea'],
      maxTurnover: ['none'],
      states: 'all',
      interestTypes: ['funding', 'infrastructure', 'mentorship'],
      additionalCriteria: [
        'Novel product idea',
        'Individual innovator or early startup',
        'Technology focus',
        'Prototype development stage'
      ]
    },
    applicationProcess: [
      'Apply at nearest PRAYAS center',
      'Present idea to evaluation committee',
      'Selection and onboarding',
      'Develop prototype with support',
      'Graduate to next stage'
    ],
    documents: [
      'Concept note',
      'Technical feasibility',
      'Innovator background',
      'Resource requirements'
    ],
    officialUrl: 'https://www.nstedb.com/institutional/nidhi-prayas.htm',
    featured: false,
    category: 'innovation'
  },
  {
    id: 'birac-biotechnology',
    name: 'BIRAC BIG (Biotechnology Ignition Grant)',
    shortName: 'BIRAC BIG',
    ministry: 'Department of Biotechnology',
    description: 'Provides grant for startups working in biotechnology, healthcare, and life sciences to validate proof of concept.',
    benefits: [
      'Grant up to ₹50 lakhs',
      '18-month project duration',
      'Milestone-based funding',
      'Access to BIRAC partner resources',
      'Follow-on funding opportunities'
    ],
    maxBenefit: 'Up to ₹50 Lakhs grant',
    eligibility: {
      categories: ['healthcare', 'agriculture', 'ai_ml'],
      stages: ['idea', 'startup'],
      maxTurnover: ['none', 'under_25l', '25l_1cr'],
      states: 'all',
      interestTypes: ['funding'],
      additionalCriteria: [
        'Biotechnology/life sciences focus',
        'Proof of concept stage',
        'Indian registered entity',
        'Innovative product/technology'
      ]
    },
    applicationProcess: [
      'Apply during BIRAC BIG call',
      'Submit detailed project proposal',
      'Expert committee evaluation',
      'Site visit and final selection',
      'Grant agreement and disbursement'
    ],
    documents: [
      'Detailed project proposal',
      'Company registration',
      'Team credentials',
      'IP disclosure (if any)'
    ],
    officialUrl: 'https://www.birac.nic.in/big.php',
    featured: false,
    category: 'innovation'
  },
  // WOMEN ENTREPRENEURS
  {
    id: 'mahila-udyam-nidhi',
    name: 'Mahila Udyam Nidhi Scheme',
    shortName: 'MUN',
    ministry: 'Small Industries Development Bank of India (SIDBI)',
    description: 'Provides equity support and soft loans to women entrepreneurs for setting up new projects or expansion/modernization.',
    benefits: [
      'Soft loan up to ₹10 lakhs',
      'Interest rate rebate for women',
      '10-year repayment period',
      'Moratorium up to 5 years',
      'No collateral for small loans'
    ],
    maxBenefit: 'Up to ₹10 Lakhs soft loan at lower interest',
    eligibility: {
      categories: ['technology', 'manufacturing', 'services', 'healthcare', 'education', 'ecommerce'],
      stages: ['idea', 'startup', 'growth'],
      states: 'all',
      interestTypes: ['funding'],
      additionalCriteria: [
        'Women entrepreneurs only',
        'Small Scale Industry sector',
        'New or existing unit',
        'Majority (51%) ownership by women'
      ]
    },
    applicationProcess: [
      'Apply through SIDBI or partner banks',
      'Submit project report',
      'Appraisal by SIDBI',
      'Loan sanction and disbursement'
    ],
    documents: [
      'Identity proof',
      'Project report',
      'Business registration',
      'Financial statements (if existing)'
    ],
    officialUrl: 'https://www.sidbi.in/',
    featured: false,
    category: 'women'
  },
  {
    id: 'wep-niti-aayog',
    name: 'Women Entrepreneurship Platform (WEP)',
    shortName: 'WEP',
    ministry: 'NITI Aayog',
    description: 'Unified platform for women entrepreneurs providing incubation, funding, compliance, and marketing support.',
    benefits: [
      'Access to funding opportunities',
      'Free incubation and mentorship',
      'Compliance assistance',
      'Marketing and networking support',
      'Community of women entrepreneurs'
    ],
    maxBenefit: 'Comprehensive ecosystem support',
    eligibility: {
      categories: ['technology', 'ai_ml', 'solar_renewable', 'manufacturing', 'services', 'agriculture', 'healthcare', 'education', 'fintech', 'ecommerce'],
      stages: ['idea', 'startup', 'growth', 'established'],
      states: 'all',
      interestTypes: ['funding', 'mentorship', 'training', 'market_access'],
      additionalCriteria: [
        'Women entrepreneurs only',
        'Aspiring or existing women business owners',
        'Any sector'
      ]
    },
    applicationProcess: [
      'Register on WEP portal',
      'Complete entrepreneur profile',
      'Access various support services',
      'Apply for specific programs'
    ],
    documents: [
      'Basic KYC',
      'Business details (if registered)'
    ],
    officialUrl: 'https://wep.gov.in/',
    featured: false,
    category: 'women'
  },
  // STATE-SPECIFIC TECH SCHEMES
  {
    id: 'karnataka-elevate',
    name: 'Karnataka Elevate 100',
    shortName: 'Elevate 100',
    ministry: 'Karnataka Startup Cell',
    description: 'State program to identify and nurture 100 innovative startups with funding, mentorship, and market access.',
    benefits: [
      'Seed funding up to ₹50 lakhs',
      'Mentorship from industry leaders',
      'Market connect opportunities',
      'Procurement preference in state projects',
      'Access to state incubators'
    ],
    maxBenefit: 'Up to ₹50 Lakhs seed funding',
    eligibility: {
      categories: ['technology', 'ai_ml', 'solar_renewable', 'manufacturing', 'services', 'healthcare', 'education', 'fintech', 'ecommerce', 'agriculture'],
      stages: ['startup', 'growth'],
      states: ['Karnataka'],
      interestTypes: ['funding', 'mentorship', 'market_access'],
      additionalCriteria: [
        'Karnataka registered startup',
        'Less than 5 years old',
        'Innovative product/service',
        'Scalable business model'
      ]
    },
    applicationProcess: [
      'Apply during Elevate program window',
      'Online application and pitch video',
      'Shortlisting and presentations',
      'Final selection as Elevate startup'
    ],
    documents: [
      'Company registration in Karnataka',
      'Product documentation',
      'Financial projections',
      'Team details'
    ],
    officialUrl: 'https://startup.karnataka.gov.in/',
    featured: false,
    category: 'startup'
  },
  {
    id: 'maharashtra-msins',
    name: 'Maharashtra State Innovation Society (MSInS) Support',
    shortName: 'MSInS',
    ministry: 'Maharashtra State Innovation Society',
    description: 'Provides comprehensive startup support in Maharashtra including funding, incubation, and innovation challenges.',
    benefits: [
      'Seed funding up to ₹15 lakhs',
      'Matching grants for R&D',
      'Innovation challenge prizes',
      'Incubation support',
      'Patent support up to ₹2 lakhs'
    ],
    maxBenefit: 'Up to ₹15 Lakhs seed funding + patent support',
    eligibility: {
      categories: ['technology', 'ai_ml', 'solar_renewable', 'manufacturing', 'services', 'healthcare', 'education', 'fintech', 'ecommerce'],
      stages: ['idea', 'startup', 'growth'],
      states: ['Maharashtra'],
      interestTypes: ['funding', 'infrastructure', 'mentorship'],
      additionalCriteria: [
        'Maharashtra registered startup',
        'Innovative product/service',
        'Less than 7 years old'
      ]
    },
    applicationProcess: [
      'Register on Maharashtra Startup portal',
      'Apply for relevant scheme',
      'Evaluation and selection',
      'Onboarding and disbursement'
    ],
    documents: [
      'Maharashtra company registration',
      'Business plan',
      'Product demo',
      'Founder details'
    ],
    officialUrl: 'https://msins.in/',
    featured: false,
    category: 'startup'
  },
  {
    id: 'telangana-tsic',
    name: 'Telangana State Innovation Cell (TSIC)',
    shortName: 'TSIC',
    ministry: 'IT Department, Telangana',
    description: 'Supports innovation and startups in Telangana through T-Hub, We-Hub, and other initiatives.',
    benefits: [
      'Access to T-Hub ecosystem',
      'Seed funding opportunities',
      'Coworking space access',
      'Corporate connect programs',
      'International market access'
    ],
    maxBenefit: 'T-Hub incubation + funding connect',
    eligibility: {
      categories: ['technology', 'ai_ml', 'fintech', 'healthcare', 'education', 'ecommerce'],
      stages: ['idea', 'startup', 'growth'],
      states: ['Telangana'],
      interestTypes: ['funding', 'infrastructure', 'mentorship', 'market_access'],
      additionalCriteria: [
        'Telangana based startup',
        'Technology focus',
        'Scalable business model'
      ]
    },
    applicationProcess: [
      'Apply through T-Hub or relevant program',
      'Selection process',
      'Join incubation cohort',
      'Access all TSIC benefits'
    ],
    documents: [
      'Company registration',
      'Pitch deck',
      'Product documentation'
    ],
    officialUrl: 'https://t-hub.co/',
    featured: false,
    category: 'startup'
  },
  {
    id: 'gujarat-startup-policy',
    name: 'Gujarat Industrial Policy Startup Support',
    shortName: 'Gujarat Startup',
    ministry: 'Industries & Mines Department, Gujarat',
    description: 'Comprehensive startup support under Gujarat Industrial Policy including seed funding, sustenance allowance, and infrastructure support.',
    benefits: [
      'Seed support up to ₹30 lakhs',
      'Sustenance allowance ₹20,000/month for founders',
      'Patent assistance up to ₹10 lakhs',
      'Marketing assistance',
      'Procurement preference'
    ],
    maxBenefit: 'Up to ₹30 Lakhs seed support + monthly allowance',
    eligibility: {
      categories: ['technology', 'ai_ml', 'solar_renewable', 'manufacturing', 'services', 'healthcare', 'education', 'fintech', 'ecommerce'],
      stages: ['idea', 'startup'],
      states: ['Gujarat'],
      interestTypes: ['funding', 'subsidy', 'infrastructure'],
      additionalCriteria: [
        'Gujarat registered startup',
        'Innovation focused',
        'DPIIT recognition preferred'
      ]
    },
    applicationProcess: [
      'Register on Gujarat Startup portal',
      'Get startup recognition',
      'Apply for specific benefits',
      'Evaluation and approval'
    ],
    documents: [
      'Gujarat company registration',
      'DPIIT recognition',
      'Business plan',
      'Innovation documentation'
    ],
    officialUrl: 'https://startupgujarat.in/',
    featured: false,
    category: 'startup'
  }
];

export const getSchemesByCategory = (category: Scheme['category']): Scheme[] => {
  return schemes.filter(scheme => scheme.category === category);
};

export const getFeaturedSchemes = (): Scheme[] => {
  return schemes.filter(scheme => scheme.featured);
};

export const getSchemeById = (id: string): Scheme | undefined => {
  return schemes.find(scheme => scheme.id === id);
};

export const searchSchemes = (query: string): Scheme[] => {
  const lowerQuery = query.toLowerCase();
  return schemes.filter(scheme => 
    scheme.name.toLowerCase().includes(lowerQuery) ||
    scheme.shortName.toLowerCase().includes(lowerQuery) ||
    scheme.description.toLowerCase().includes(lowerQuery) ||
    scheme.ministry.toLowerCase().includes(lowerQuery)
  );
};
