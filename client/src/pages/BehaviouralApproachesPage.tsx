import { GradientBackground } from '../components/Gradient';
import GridPattern from '../components/GridPattern';
import behaviour from '../assets/consumer-behaviour.jpg';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const BehaviouralApproachesPage = () => {
  const stats = [
    { label: '', value: '' },
    { label: '', value: '' },
    { label: '', value: '' },
  ];
  const resources = [
    {
      title: 'The Behavioural Economics Guide 2024',
      href: 'https://www.behavioraleconomics.com/be-guide/the-behavioral-economics-guide-2024/',
    },
    {
      title: 'Nudge: Improving Decisions About Health, Wealth, and Happiness',
      href: 'https://dybfin.olin.wustl.edu/teaching/topicsquantfin19-1/tqf19-1slides/Topic_in_Quant_Fin.pdf',
    },
    {
      title: 'Nudge in perspective: A systematic literature review on the ethical issues with nudging',
      href: 'https://journals.sagepub.com/doi/full/10.1177/10434631231155005#bibr133-10434631231155005',
    },
    
  ];

  return (
    <div className="relative min-h-screen">
      <GridPattern />
      <GradientBackground />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">

              {/* image */}
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pt-64 pb-9 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <img
                  alt='graph'
                  src={behaviour}
                  className="absolute inset-0 size-full object-cover brightness-100 object-center"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gray-900/30 mix-blend-soft-light" />
                <div
                  aria-hidden="true"
                  className="absolute top-1/2 left-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                > 
                </div>
              </div>

              {/* quote */}
              <figure className="mt-6 lg:max-w-lg">
                <blockquote className="text-base/7 font-bold text-gray-900 sm:text-lg/8">
                  <p>
                  "Nudge: any aspect of the choice architecture that alters people's behaviour in a predictable way without forbidding any options or significantly changing their economic incentives.” 
                  </p>
                </blockquote>
              </figure>     
            </div>

            {/* Main text container */}
            <div>
              <div className="text-base/7 text-gray-900 lg:max-w-lg">
                <p className="text-lg/7 font-semibold text-indigo-600">
                  Behavioural Economics 
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Empower the consumer to make informed choices
                </h1>
                <div className="max-w-xl">
                  <p className="mt-8">
                    <strong className="text-indigo-600">Consumer behaviour</strong> is characterised by:
                    <li>
                      <strong className="text-indigo-600">Social norms</strong> Conforming with peer groups.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Priming</strong> The concept of priming is informed by anchoring bias, whereby initial information heavily influences perception, overriding subsequent insights. Thus, first impressions hold more sway than later learnings. 
                    </li>
                    <li>
                      <strong className="text-indigo-600">Free-rider problem</strong> Consumers are hesitant to sacrifice their unsustainable consumption habits for the benefit of society. 
                    </li>
                    <li>
                      <strong className="text-indigo-600">Mental accounting</strong> Despite the value of money remaining constant, consumers treat money differently depending upon how it was earned or gained.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Present bias</strong> The belief that future prudence will compensate for current indulgence. This bias is compounded by factors like “hyperbolic discounting” and “money discounting,” where consumers overestimate future savings or accept smaller financial gains to satisfy immediate desires.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Overconfidence and optimism</strong> Consumers over estimate their abilities and disregard potential risks and negative outcomes.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Scarcity bias</strong> The concept of scarcity is  a matter of perception that can be manipulated by creative marketing. When a known brand announces a limited-edition product drop, consumers are likely to respond simply because of the perceived scarcity of the product. 
                    </li>
                    <li>
                      <strong className="text-indigo-600">Loss aversion and status quo bias</strong> A tendency for consumers to stick with familiar choices, rather than exploring alternatives. 
                    </li>
                    <li>
                      <strong className="text-indigo-600">Reference point</strong> Consumers tend to evaluate outcomes relative to a reference point.
                    </li>   
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">Nudging</strong> is a concept introduced by Thaler and Sustein (2008) whereby behavioural interventions can be leveraged to steer people subtly towards choices that improve their welfare whilst still respecting their freedom of choice. Consumers can be 'nudged' through the following behavioural interventions: 
                    <li>
                     <strong className="text-indigo-600">The power of now.</strong> Identifying timely moments when consumers are most receptive to changing their habits and consumption patterns.
                    </li>
                    <li>
                      <strong className="text-indigo-600">The power of norms.</strong> The use of dynamic norms highlighting culture shifts to more mindful consumption.
                    </li>
                    <li>
                      <strong className="text-indigo-600">The power of emotions.</strong> Increasing positive feelings around mindful consumption and negative feelings around overconsumption.
                    </li>
                    <li>
                      <strong className="text-indigo-600">The power of collective action.</strong> Conditional cooperation and collective action encourages the selfish consumer to make more sustainable choices.
                    </li>
                    <li>
                      <strong className="text-indigo-600">The power of framing.</strong> Re-framing messages can change consumer's perspectives and choices.
                    </li>
                    <li>
                      <strong className="text-indigo-600">The power of priming.</strong> Exposing consumers to a stimulus to temporarily activate specific mental concepts.
                    </li>
                  </p>
                  
                  
                </div>
              </div>

              {/* stats */}
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div key={statIdx}>
                    <dt className="text-sm/6 font-semibold text-indigo-500">
                      {stat.label}
                    </dt>
                    <dd className="mt-2 text-3xl/10 font-bold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* resources */}
              <div className="mt-10 text-base/7 font-semibold text-gray-900">
                {resources.map(
                  (resource) =>
                    resource.title &&
                    resource.href && (
                      <div key={resource.title} className="mt-3 text-sm/6">
                        <a
                          href={resource.href}
                          className="  hover:text-indigo-500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {resource.title}
                          <ChevronRightIcon className="h-4 w-4 inline-block" />
                        </a>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviouralApproachesPage;
