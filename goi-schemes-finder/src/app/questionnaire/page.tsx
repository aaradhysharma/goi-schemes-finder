'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import StepIndicator from '@/components/StepIndicator';
import {
  INDIAN_STATES,
  BUSINESS_CATEGORIES,
  BUSINESS_STAGES,
  TURNOVER_RANGES,
  EMPLOYEE_RANGES,
  INTEREST_TYPES,
  BusinessCategory,
  BusinessStage,
  TurnoverRange,
  EmployeeRange,
  InterestType,
  UserProfile,
} from '@/lib/schemes-data';

const STEPS = ['State', 'Business', 'Stage', 'Details', 'Interests'];

export default function QuestionnairePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState<Partial<UserProfile>>({
    interests: [],
    isWomenOwned: false,
    isSC_ST_OBC: false,
  });

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit and navigate to results
      const queryParams = new URLSearchParams({
        state: profile.state || '',
        category: profile.businessCategory || '',
        stage: profile.businessStage || '',
        turnover: profile.turnover || '',
        employees: profile.employees || '',
        interests: (profile.interests || []).join(','),
        women: profile.isWomenOwned ? '1' : '0',
        scst: profile.isSC_ST_OBC ? '1' : '0',
      });
      router.push(`/results?${queryParams.toString()}`);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return !!profile.state;
      case 1:
        return !!profile.businessCategory;
      case 2:
        return !!profile.businessStage;
      case 3:
        return !!profile.turnover && !!profile.employees;
      case 4:
        return (profile.interests?.length || 0) > 0;
      default:
        return false;
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Find Your Schemes
            </h1>
            <p className="text-gray-400">
              Answer a few questions to discover schemes you&apos;re eligible for
            </p>
          </div>

          {/* Step Indicator */}
          <div className="mb-10">
            <StepIndicator
              currentStep={currentStep}
              totalSteps={STEPS.length}
              stepLabels={STEPS}
            />
          </div>

          {/* Form Card */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            {/* Step 0: State Selection */}
            {currentStep === 0 && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-semibold text-white mb-2">
                  Where is your business located?
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  Some schemes are state-specific while others are available nationwide
                </p>
                
                <select
                  value={profile.state || ''}
                  onChange={(e) => setProfile({ ...profile, state: e.target.value })}
                  className="select-field"
                >
                  <option value="">Select your state/UT</option>
                  {INDIAN_STATES.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Step 1: Business Category */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-semibold text-white mb-2">
                  What type of business do you have?
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  Select the category that best describes your business
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {BUSINESS_CATEGORIES.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setProfile({ ...profile, businessCategory: cat.value })}
                      className={`
                        p-4 rounded-xl text-left transition-all
                        ${profile.businessCategory === cat.value
                          ? 'bg-saffron/20 border-2 border-saffron'
                          : 'bg-navy-lighter border-2 border-transparent hover:border-saffron/50'
                        }
                      `}
                    >
                      <span className="text-2xl block mb-2">{cat.icon}</span>
                      <span className={`text-sm font-medium ${
                        profile.businessCategory === cat.value ? 'text-saffron' : 'text-white'
                      }`}>
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Business Stage */}
            {currentStep === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-semibold text-white mb-2">
                  What stage is your business at?
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  This helps us find schemes appropriate for your growth phase
                </p>
                
                <div className="space-y-3">
                  {BUSINESS_STAGES.map((stage) => (
                    <button
                      key={stage.value}
                      onClick={() => setProfile({ ...profile, businessStage: stage.value })}
                      className={`
                        w-full p-4 rounded-xl text-left transition-all
                        ${profile.businessStage === stage.value
                          ? 'bg-saffron/20 border-2 border-saffron'
                          : 'bg-navy-lighter border-2 border-transparent hover:border-saffron/50'
                        }
                      `}
                    >
                      <span className={`font-medium block ${
                        profile.businessStage === stage.value ? 'text-saffron' : 'text-white'
                      }`}>
                        {stage.label}
                      </span>
                      <span className="text-gray-400 text-sm">{stage.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Business Details */}
            {currentStep === 3 && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-semibold text-white mb-2">
                  Tell us more about your business
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  This helps determine eligibility for various schemes
                </p>
                
                {/* Turnover */}
                <div className="mb-6">
                  <label className="block text-white font-medium mb-3">
                    Annual Turnover
                  </label>
                  <div className="space-y-2">
                    {TURNOVER_RANGES.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setProfile({ ...profile, turnover: range.value })}
                        className={`
                          w-full p-3 rounded-lg text-left transition-all text-sm
                          ${profile.turnover === range.value
                            ? 'bg-saffron/20 border-2 border-saffron text-saffron'
                            : 'bg-navy-lighter border-2 border-transparent text-white hover:border-saffron/50'
                          }
                        `}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Employees */}
                <div className="mb-6">
                  <label className="block text-white font-medium mb-3">
                    Number of Employees
                  </label>
                  <div className="space-y-2">
                    {EMPLOYEE_RANGES.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setProfile({ ...profile, employees: range.value })}
                        className={`
                          w-full p-3 rounded-lg text-left transition-all text-sm
                          ${profile.employees === range.value
                            ? 'bg-saffron/20 border-2 border-saffron text-saffron'
                            : 'bg-navy-lighter border-2 border-transparent text-white hover:border-saffron/50'
                          }
                        `}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Categories */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={profile.isWomenOwned || false}
                      onChange={(e) => setProfile({ ...profile, isWomenOwned: e.target.checked })}
                      className="w-5 h-5 rounded border-2 border-gray-400 bg-navy-lighter text-saffron focus:ring-saffron"
                    />
                    <span className="text-white">Women-owned business (51%+ ownership)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={profile.isSC_ST_OBC || false}
                      onChange={(e) => setProfile({ ...profile, isSC_ST_OBC: e.target.checked })}
                      className="w-5 h-5 rounded border-2 border-gray-400 bg-navy-lighter text-saffron focus:ring-saffron"
                    />
                    <span className="text-white">SC/ST/OBC entrepreneur</span>
                  </label>
                </div>
              </div>
            )}

            {/* Step 4: Interests */}
            {currentStep === 4 && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-semibold text-white mb-2">
                  What kind of support are you looking for?
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  Select all that apply to find the most relevant schemes
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {INTEREST_TYPES.map((interest) => {
                    const isSelected = profile.interests?.includes(interest.value);
                    return (
                      <button
                        key={interest.value}
                        onClick={() => {
                          const currentInterests = profile.interests || [];
                          const newInterests = isSelected
                            ? currentInterests.filter((i) => i !== interest.value)
                            : [...currentInterests, interest.value];
                          setProfile({ ...profile, interests: newInterests });
                        }}
                        className={`
                          p-4 rounded-xl text-left transition-all
                          ${isSelected
                            ? 'bg-saffron/20 border-2 border-saffron'
                            : 'bg-navy-lighter border-2 border-transparent hover:border-saffron/50'
                          }
                        `}
                      >
                        <span className="text-2xl block mb-2">{interest.icon}</span>
                        <span className={`text-sm font-medium ${
                          isSelected ? 'text-saffron' : 'text-white'
                        }`}>
                          {interest.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="btn-secondary flex-1"
                >
                  ← Back
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`
                  flex-1 py-3 px-6 rounded-lg font-semibold transition-all
                  ${canProceed()
                    ? 'btn-primary'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                {currentStep === STEPS.length - 1 ? 'Find Schemes →' : 'Continue →'}
              </button>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Your information is not stored. It&apos;s only used to find matching schemes.
          </p>
        </div>
      </div>
    </main>
  );
}

