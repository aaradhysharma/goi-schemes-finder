'use client';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export default function StepIndicator({
  currentStep,
  totalSteps,
  stepLabels,
}: StepIndicatorProps) {
  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="h-1 bg-navy-lighter rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-saffron to-saffron-light transition-all duration-500"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Step Dots */}
      <div className="flex justify-between">
        {stepLabels.map((label, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-300 ${
              index <= currentStep ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <div
              className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                transition-all duration-300
                ${
                  index < currentStep
                    ? 'bg-saffron text-navy'
                    : index === currentStep
                    ? 'bg-saffron/20 text-saffron border-2 border-saffron'
                    : 'bg-navy-lighter text-gray-400'
                }
              `}
            >
              {index < currentStep ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <span
              className={`
                mt-2 text-xs font-medium hidden sm:block
                ${index === currentStep ? 'text-saffron' : 'text-gray-400'}
              `}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

