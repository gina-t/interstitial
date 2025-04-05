import { GradientBackground } from '../components/Gradient';
import GridPattern from '../components/GridPattern';
import marketingStrategies from '../assets/marketing-strategies-1.jpg';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const MarketingStrategiesPage = () => {
  const stats = [
    { label: 'Market share of global seeds held by 4 corporations', value: '67%' },
    { label: 'Market share of global agrochemicals held by 4 corporations', value: '70%' },
    { label: 'Market share of global grain trading held by 4 corporations', value: '90%' },
  ];
  const resources = [
    {
      title: 'Essay: Food Democracy and the Future of American Values',
      href: 'https://aglawjournal.wp.drake.edu/wp-content/uploads/sites/66/2016/09/agVol09No1-Hamilton.pdf',
    },
    {
      title: 'Food Democracy: From Consumer to Food Citizen',
      href: 'https://books.google.com.au/books?id=DS3ABgAAQBAJ&pg=PA3&redir_esc=y#v=onepage&q&f=false',
    },
    {
      title: 'Varieties of food democracy: a systematic literature review',
      href: 'https://www.tandfonline.com/doi/full/10.1080/19460171.2023.2191859#abstract',
    },
    {
      title: 'Ultra-Processed Profits: The Political Economy of Countering the Global Spread of Ultra-Processed Foods – A Synthesis Review on the Market and Political Practices of Transnational Food Corporations and Strategic Public Health Responses',
      href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9309965/',
    },
    {
      title: 'Involvement of the food industry in nutrition conferences in Latin America and Caribbean',
      href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10195453/',
    },
    {
      title: 'The role of transnational food and agriculture corporations in creating and responding to food crises',
      href: 'https://canadianfoodstudies.uwaterloo.ca/index.php/cfs/article/view/91',
    },
    {
      title: 'The growing influence of corporations on the governance of food systems, and how to counter it',
      href: 'https://www.ipes-food.org/_img/upload/files/tippingthescales.pdf',
    },
    {
      title: 'Transnational Corporations and the Global Food System',
      href: 'https://awellfedworld.org/wp-content/uploads/pdf/McLaughlin%20TNCs%20and%20the%20Global%20Food%20System.pdf',
    },
    {
      title: 'Gene-editing technology is owned and controlled by big corporations',
      href: 'https://www.greens-efa.eu/files/assets/docs/chapter_6_gene-editing_technology_is_owned_and_controlled_by_big_corporations.pdf',
    }
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
                  alt="hamburgers and chips"
                  src={marketingStrategies}
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
                    "Big Food describes the agrifood transnational corporations that dominate global food production."
                  </p>
                </blockquote>
              </figure>
            </div>

            {/* Main text container*/}
            <div>
              <div className="text-base/7 text-gray-900 lg:max-w-lg">
                <p className="text-lg/7 font-semibold text-indigo-600">
                  Big Food
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Empower the consumer to make informed choices
                </h1>
                <div className="max-w-xl">
                  <p className="mt-8">
                    <strong className="text-indigo-600">Big Food</strong> is a term coined by Neil Hamilton
                    (2004) to describe the agrifood transnational corporations (TNCs)
                    that dominate global food production. Big Food TNCs,
                    including Nestlé, PepsiCo, Mondelez International,
                    Coca-Cola, Cargill, Kraft Heinz, General Mills, Kellog's,
                    Tyson Foods, Unilever, and Mars are the largest producers of
                    ultra-processed foods re-shaping traditional and culturally
                    appropriate dietary patterns. 
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">An agrifood TNC</strong> may contract with the farmer to produce meat, dairy products, grain, vegetables, fruit; using inputs supplied by the corporation; feeding or fertilizing according to the corporation's computerized schedule using the corporation's feed or fertilizer; and borrowing money, frequently from the same corporation, to construct the buildings and buy or lease the equipment needed to fulfill the contract. 
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">Inputs</strong> for eg. genetically modified seeds and agrochemicals, are controlled by Bayer, DowDuPont and SinoChem-ChemChina. These corporations successfully secured licensing agreements with the holders of foundational CRISPR technology patents for gene-editing and plant breeding. DowDuPont combined 48 basic patents into a patent pool, thus gaining unprecedented market power due to its ability to grant conditional access to this patent pool (appropriate fees, reporting
                    obligations, compliance with guidelines, and confidentiality). DowDuPont is now the 'gatekeeper of an international patent cartel' (Patente-Kartell für große Konzerne, 2019).
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">Profit-driven</strong> with unprecedented market share and political might, Big Food are transmogrifying food production and food
                    presentation, and the consumer is utterly disconnected from the facts:
                    <li>
                      <strong className="text-indigo-600">Monoculture crops</strong> or monocropping, defined as planting the
                      same crops in the same fields year after year (typically
                      corn, wheat, canola, soybeans, sugar cane, beets, tapioca,
                      rice, palm), promotes loss of biodiversity , soil
                      erosion and exhaustion, pollutes water resources, and
                      encourages use of pesticides and chemical fertilisers.
                      Furthermore, small growers adhering to sensible cropping
                      methods such as crop rotation and polyculture, are priced
                      out of the market. Loss of biodiversity (75% of crop
                      diversity was lost between 1900 and 2000) 
                      impacts downstream wildlife communities, pollination, biological
                      control, and waste disposal. Monoculture crops are planted
                      from genetically modified seeds, which are patented by Big
                      Food corporations, and farmers are required to purchase
                      new seeds each year.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Intensive livestock farming</strong>, defined as the breeding of
                      animals in captivity for slaughter, is not only abhorrent,
                      but contributes to greenhouse gas emissions,
                      deforestation, water pollution, and antibiotic resistance.
                      Calves are forcibly separated from their milk-producing
                      mothers and unceremoniusly slaughtered in sight of their
                      mothers. Pigs are confined to gestation crates. Hens are
                      crammed into barren battery cages with their beaks removed
                      without anaesthetic, and no place to roost. Salmon are farmed in overcrowded
                      pens, fed antibiotics and growth hormones, suffer from
                      bacterial outbreaks and large mortality events, dying
                      and dead salmon are harvested and sold for human
                      consumption, and due to oxygen depletion endanger species such as the Tasmanian Maugean skate.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Gene-editing technologies</strong> for major row crops are owned and controlled by agrifood TNCs through patent pools. DowDuPont's agricultural division was spun off in 2019 as an independent entity named Corteva. Corteva currently dominates CRISPR technologies in the agricultural sector.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Packaging</strong> of ultra-processed foods, whilst convenient and practical to
                      the consumer, promotes unrecyclable plastic waste.
                    </li>
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">Big Food</strong> employs corporate and political strategies to
                    establish, promote and sustain ultra-processed food
                    consumption. These strategies include:
                    <li>
                      <strong className="text-indigo-600">Establishing global production networks.</strong> Enabled by
                      financial capital, trademarks, global brand recognitiion,
                      sophisticated logistic and manufacturing technologies,
                      acquisition of domestic competitors, and capacity to adapt
                      operational practices to diverse regulatory, economic and
                      social contexts.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Establishing hyperlocal distribution networks.</strong> Facilitated
                      by warehousing, supermarket retailing, convenience stores.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Scaling-up digital marketing.</strong> Social media platforms sell
                      Big Data to agri-food corporations to create personalised
                      advertising, expand target audience reach, and increase
                      brand likeability.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Capturing government policy.</strong> Big Food fosters favourable
                      regulatory environments and policies that represent their
                      interests, through lobbying to shape trade and investment agreements, donations and
                      gifts to political parties and policy makers, multi-stakeholder roundtables for eg. 'sustainable palm oil', threats of
                      litigation, revolving door practices (whereby personnel move between roles as legislators or regulators in the public sector, and as employees or lobbyists of industries),  and 'self-regulatory' codes of conduct for eg.
                      advertising ultra-processed foods to childern, that do not
                      meet required government standards.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Capturing science.</strong> Big Food sponsors research that seeks to
                      obscure public health evidence, disseminates data that
                      supports industry position, uses unpublished and non-peer
                      reviewed evidence to obstruct government policy, and
                      sponsors nutrition and dietetics conferences. Corporate
                      sponsorship exposes professionals to their brands,
                      decreases critcism of their products, and leads to bias
                      and conflict of interest.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Capturing community.</strong> Big Food mobilises a grassroots
                      movement through public-private partnerships, corporate
                      social responsibility initiatives, and sponsorship of
                      community organisations, sports groups, and community
                      leaders, to increase positive public attitudes to
                      unhealthy commodities and legitimise their consumption.
                      Big Food is thereby perceived in a more conciliatory view,
                      and the consumer is more likely to purchase their
                      products.
                    </li>
                    <li>
                      <strong className="text-indigo-600">Building barriers</strong> to competitive entry. Barriers that widen moat and keep competitors at bay include trade secrets, proprietary designs and know-how, patents, trademarks, copyrights, zoning, permits, regulatory approvals, brand names, trade names, customized or proprietary databases, published articles or industry press, exclusive contracts or agreements with suppliers and distributors.
                      
                    </li>
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">Food democracy</strong> is a term coined by Tim Lang
                    (1992) to describe 'the demand for greater access and
                    collective benefit from the food system'. The need for a
                    more equitable and sustainable food system is the antagonist
                    of Big Food. Food democracy is a grassroots movement that
                    promotes the consumer's right to know where their food comes
                    from, how it is produced, and the impact of food production
                    upon the environment. Food Democracy is about empowering the
                    consumer to make informed choices, and about re-establishing the
                    connections between food production, farmers, consumers and
                    community. Informed consumers envisage a food future which
                    underpins the role of food in well-being, where small scale
                    farmers produce and sell whole foods to local communities,
                    where public policy supports efforts to strengthen local
                    food systems, where animals are treated compassionately, and
                    where the environment is protected. Food democracy criteria
                    include:
                    <li>Deliberation and participation</li>
                    <li>Knowledge</li>
                    <li>Sharing ideas</li>
                    <li>Developing efficacy</li>
                    <li>Orienting toward the community good</li>
                    <li>Collaboarting toward sustainability</li>
                    <li>Food choice</li>
                    <li>Rights protection</li>
                    <li>Transparency</li>
                    <li>Place-based economy</li>
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">Agrifood transnational corporations</strong> and the <strong className="text-indigo-600">supermarket retail sector </strong> are
                    central actors in the industrial food system, highly
                    profitable, and are able to affect regulatory outcomes by
                    gaining access to policy makers. With financial capital,
                    power and political influence, agrifood TNCs and
                    supermarkets are not effectively regulated and do not uphold
                    corporate governance. Governments need to protect consumers
                    by imposing corporate governance (anti-trust policies, lobbying registers, codes of conduct), enforcing transparency around food prices, and reigning in of corporate monopolies to boost competition. 
                  </p>
                  <p className="mt-8">
                    <strong className="text-indigo-600">The Australian Competition and Consumer
                    Commission</strong> recently (March 2025) recommended widespread reforms in the supermarket retail sector, and chastised Coles and Woolworths for their obscene profits during the cost of living crisis. Described by the ACCC as an “oligopoly”, Coles and Woolworths collectively hold 67% of Australia's national grocery sales, and are amongst the most profitable supermarkets globally. The ACCC's recommendations include:
                    <li>
                      Greater transparency around prices, special offers, and
                      loyalty programmes.
                    </li>
                    <li>
                      Consumers are to be notified if a product's size is
                      changed.
                    </li>
                    <li>Prices are to be published online.</li>
                    <li>
                      Online comparison tools are to be allowed access to Coles,
                      Woolworths and Aldi data to inform consumers of prices.
                    </li>
                    <li>
                      More transparency in the oligopoly's negotiations with
                      fresh produce suppliers.
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

export default MarketingStrategiesPage;
