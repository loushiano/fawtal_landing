<template>
  <div class="bg-gray-800" style="background-color: black">
    <div id="header" class="py-4 px-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="flex items-center">
            <img src="/logo-no-name.png" alt="Vigelon Consulting logo" class=" h-24 mb-8" />
          </div>
        </div>

        <div class="hidden lg:flex items-center space-x-8">
          <a
            href="#hero"
            class="text-gray-100 hover:text-gray-300 transition-colors cursor-pointer"
            >Home</a
          >
          <a
            href="#services"
            class="text-gray-100 hover:text-gray-300 transition-colors cursor-pointer"
            >Services</a
          >
          <a
            href="#process"
            class="text-gray-100 hover:text-gray-300 transition-colors cursor-pointer"
            >Process</a
          >
          <a
            href="#industries"
            class="text-gray-100 hover:text-gray-300 transition-colors cursor-pointer"
            >Industries</a
          >
          <a
            href="/blogs"
            class="text-gray-100 hover:text-gray-300 transition-colors cursor-pointer"
            >Blogs</a
          >
          <a
            href="#contact"
            class="text-gray-100 hover:text-gray-300 transition-colors cursor-pointer"
            >Contact</a
          >
        </div>

        <div class="flex items-center space-x-4">
          <a
            href="#contact"
            class="bg-neutral-900 text-white  md:px-6 px-2 md:py-2 py-1 md:text-base text-xs rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Book Consultation
          </a>
          <button class="lg:hidden p-2">
            <i class="fa-solid fa-bars text-gray-100"></i>
          </button>
        </div>
      </div>
    </div>

    <section id="hero" class="md:py-20 py-1 px-6 md:min-h-[700px] min-h-[500px]">
      <div class="mx-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="space-y-4 lg:max-w-[40vw] w-full hero-text-content">
              <h1
                class="text-xl md:text-6xl text-gray-300 leading-tight hero-title"
              >
                Not sure how AI can help your business?
              </h1>
              <p
                class="md:text-xl  text-sm text-gray-200 leading-relaxed hero-subtitle"
              >
                We help businesses automate workflows, cut costs, and improve
                decision-making using AI. Transform your operations with proven
                AI strategies tailored to your industry.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 hero-buttons">
              <a
                href="#contact"
                class="bg-neutral-900 text-white md:px-8 px-4 md:py-4 py-2 rounded-full hover:bg-neutral-800 transition-colors text-lg text-center"
              >
                Book a Free Consultation
              </a>
           
            </div>

            <div class="flex items-center space-x-8 pt-4 hero-stats">
              <div class="text-center">
                <div class="text-2xl text-gray-300">50+</div>
                <div class="text-sm text-gray-200">Projects Delivered</div>
              </div>
              <div class="text-center">
                <div class="text-2xl text-gray-300">$2M+</div>
                <div class="text-sm text-gray-200">
                  Cost Savings Generated
                </div>
              </div>
              <div class="text-center">
                <div class="text-2xl text-gray-300">95%</div>
                <div class="text-sm text-gray-200">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div class="relative hero-visual lg:block hidden">
            <div
              class="rounded-2xl p-8 h-96 flex items-center justify-center hero-main-card"
            >
              <div class="text-center space-y-4">
                <img
                  src="/hero-long.png"
                  alt="hero-image"
                  class="object-cover rounded-2xl h-[600px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="services"
      class="md:py-20 py-1 px-6"
      style="background-color: black"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl text-gray-300 mb-4">
            Our AI Implementation Services
          </h2>
          <p class="text-xl text-gray-200 max-w-3xl mx-auto">
            From initial assessment to full-scale deployment, we provide
            comprehensive AI solutions tailored to your business needs and
            technical requirements
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="rounded-xl p-6 transition-all duration-300 text-center">
            <div
              class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fa-solid fa-clipboard-check text-blue-600 text-2xl"></i>
            </div>
            <h3 class="text-xl text-gray-300 mb-3">
              AI Readiness Assessment
            </h3>
            <p class="text-gray-200 text-sm leading-relaxed">
              We evaluate your current systems and data to identify the best AI
              opportunities for your business.
            </p>
          </div>

          <div class="transition-all duration-300 text-center">
            <div
              class="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i
                class="fa-solid fa-arrow-up-right-dots text-green-600 text-2xl"
              ></i>
            </div>
            <h3 class="text-xl text-gray-300 mb-3">
              Pilot to Enterprise Projects
            </h3>
            <p class="text-gray-200 text-sm leading-relaxed">
              From small proof-of-concepts to full-scale enterprise AI
              deployments that deliver real results.
            </p>
          </div>

          <div class="transition-all duration-300 text-center">
            <div
              class="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i
                class="fa-solid fa-diagram-project text-purple-600 text-2xl"
              ></i>
            </div>
            <h3 class="text-xl text-gray-300 mb-3">Workflow Automation</h3>
            <p class="text-gray-200 text-sm leading-relaxed">
              Streamline your processes with smart automation and seamlessly
              integrate existing AI tools.
            </p>
          </div>

          <div class="transition-all duration-300 text-center">
            <div
              class="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fa-solid fa-lightbulb text-orange-600 text-2xl"></i>
            </div>
            <h3 class="text-xl text-gray-300 mb-3">
              AI Strategy & Consulting
            </h3>
            <p class="text-gray-200 text-sm leading-relaxed">
              Strategic guidance to align AI initiatives with your business
              goals and maximize ROI.
            </p>
          </div>

          <div class="transition-all duration-300 text-center">
            <div
              class="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fa-solid fa-chart-line text-indigo-600 text-2xl"></i>
            </div>
            <h3 class="text-xl text-gray-300 mb-3">
              Data Analytics & Intelligence
            </h3>
            <p class="text-gray-200 text-sm leading-relaxed">
              Transform your data into actionable insights with predictive
              analytics and intelligent reporting.
            </p>
          </div>

          <div class="transition-all duration-300 text-center">
            <div
              class="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fa-solid fa-graduation-cap text-teal-600 text-2xl"></i>
            </div>
            <h3 class="text-xl text-gray-300 mb-3">AI Training & Support</h3>
            <p class="text-gray-200 text-sm leading-relaxed">
              Comprehensive training for your team plus ongoing support to
              ensure long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="process" class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl text-gray-300 mb-4">Our Proven Process</h2>
          <p class="text-xl text-gray-200 max-w-3xl mx-auto">
            A systematic approach to AI implementation that minimizes risk and
            maximizes success
          </p>
        </div>

        <div class="relative">
          <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div class="relative">
              <div
                class="bg-black border-4 border-neutral-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 relative z-10"
              >
                <i
                  class="fa-solid fa-magnifying-glass text-gray-200 text-2xl"
                ></i>
              </div>
              <div class="text-center">
                <h3 class="text-2xl text-gray-300 mb-4">1. Discovery</h3>
                <p class="text-gray-200 leading-relaxed mb-6">
                  We analyze your business processes, data landscape, and
                  strategic objectives to identify the highest-impact AI
                  opportunities.
                </p>
                <div class="bg-gray-800 rounded-lg p-4 space-y-2">
                  <div class="flex items-center text-sm text-gray-200">
                    <i class="fa-solid fa-check text-gray-200 mr-2"></i>
                    Business process mapping
                  </div>
                  <div class="flex items-center text-sm text-gray-200">
                    <i class="fa-solid fa-check text-gray-200 mr-2"></i>
                    Data quality assessment
                  </div>
                  <div class="flex items-center text-sm text-gray-200">
                    <i class="fa-solid fa-check text-gray-200 mr-2"></i>
                    Stakeholder interviews
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div
                class="bg-black border-4 border-neutral-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 relative z-10"
              >
                <i class="fa-solid fa-flask text-gray-200 text-2xl"></i>
              </div>
              <div class="text-center">
                <h3 class="text-2xl text-gray-300 mb-4">2. Pilot</h3>
                <p class="text-gray-200 leading-relaxed mb-6">
                  We develop and deploy focused pilot projects that demonstrate
                  clear value while building organizational AI capabilities.
                </p>
                <div class="bg-gray-800 rounded-lg p-4 space-y-2">
                  <div class="flex items-center text-sm text-gray-200">
                    <i class="fa-solid fa-check text-gray-200 mr-2"></i>
                    MVP development
                  </div>
                  <div class="flex items-center text-sm text-gray-200">
                    <i class="fa-solid fa-check text-gray-200 mr-2"></i>
                    Performance monitoring
                  </div>
                  <div class="flex items-center text-sm text-gray-200">
                    <i class="fa-solid fa-check text-gray-200 mr-2"></i>
                    User training
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div
                class="bg-black border-4 border-neutral-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 relative z-10"
              >
                <i class="fa-solid fa-chart-line text-gray-200 text-2xl"></i>
              </div>
              <div class="text-center">
                <h3 class="text-2xl text-gray-300 mb-4">3. Scale</h3>
                <p class="text-gray-200 leading-relaxed mb-6">
                  We expand successful pilots across your organization with
                  robust governance, monitoring, and continuous optimization.
                </p>
                <div class="bg-gray-800 rounded-lg p-4 space-y-2">
                  <div class="flex items-center text-sm text-gray-200">
                    <i class="fa-solid fa-check text-gray-200 mr-2"></i>
                    Enterprise deployment
                  </div>
                  <div class="flex items-center text-sm text-gray-200">
                    <i class="fa-solid fa-check text-gray-200 mr-2"></i>
                    Governance frameworks
                  </div>
                  <div class="flex items-center text-sm text-gray-200">
                    <i class="fa-solid fa-check text-gray-200 mr-2"></i>
                    Continuous optimization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-16">
          <div class="bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 class="text-2xl text-gray-300 mb-4">
              Timeline &amp; Investment
            </h3>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="text-3xl text-gray-200 mb-2">2-4 weeks</div>
                <div class="text-gray-200">Discovery Phase</div>
              </div>
              <div class="text-center">
                <div class="text-3xl text-gray-200 mb-2">8-12 weeks</div>
                <div class="text-gray-200">Pilot Development</div>
              </div>
              <div class="text-center">
                <div class="text-3xl text-gray-200 mb-2">6-12 months</div>
                <div class="text-gray-200">Full Scale Implementation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="industries" class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl text-gray-300 mb-4">Where We Deliver Value</h2>
          <p class="text-xl text-gray-200 max-w-3xl mx-auto">
            Industry-specific AI solutions that address real business challenges
            and drive measurable results
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-12">
          <div
            class="bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              class="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-6"
            >
              <i
                class="fa-solid fa-scale-balanced text-gray-800 text-2xl"
              ></i>
            </div>
            <h3 class="text-2xl text-gray-300 mb-4">Law Firms</h3>
            <p class="text-gray-200 mb-6 leading-relaxed">
              Streamline legal research, automate document review, and enhance
              client service with AI-powered solutions.
            </p>

            <div class="space-y-4 mb-6">
              <div class="border-l-4 border-neutral-200 pl-4">
                <h4 class="text-gray-300 mb-1">Document Analysis</h4>
                <p class="text-sm text-gray-200">
                  Reduce contract review time by 70% with AI-powered analysis
                </p>
              </div>
              <div class="border-l-4 border-neutral-200 pl-4">
                <h4 class="text-gray-300 mb-1">Legal Research</h4>
                <p class="text-sm text-gray-200">
                  Accelerate case research with intelligent search and
                  summarization
                </p>
              </div>
              <div class="border-l-4 border-neutral-200 pl-4">
                <h4 class="text-gray-300 mb-1">Client Intake</h4>
                <p class="text-sm text-gray-200">
                  Automate initial client screening and case assessment
                </p>
              </div>
            </div>

            <div class="bg-gray-800 rounded-lg p-4 mb-6">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-100"
                  >Average Time Savings</span
                >
                <span class="text-lg text-gray-200">45%</span>
              </div>
            </div>
          </div>

          <div
            class="bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              class="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-6"
            >
              <i class="fa-solid fa-store text-gray-200 text-2xl"></i>
            </div>
            <h3 class="text-2xl text-gray-300 mb-4">Retail</h3>
            <p class="text-gray-200 mb-6 leading-relaxed">
              Optimize inventory, personalize customer experiences, and predict
              demand with advanced AI analytics.
            </p>

            <div class="space-y-4 mb-6">
              <div class="border-l-4 border-neutral-200 pl-4">
                <h4 class="text-gray-300 mb-1">Demand Forecasting</h4>
                <p class="text-sm text-gray-200">
                  Improve inventory accuracy by 85% with predictive analytics
                </p>
              </div>
              <div class="border-l-4 border-neutral-200 pl-4">
                <h4 class="text-gray-300 mb-1">Personalization</h4>
                <p class="text-sm text-gray-200">
                  Increase conversion rates with AI-driven product
                  recommendations
                </p>
              </div>
              <div class="border-l-4 border-neutral-200 pl-4">
                <h4 class="text-gray-300 mb-1">Price Optimization</h4>
                <p class="text-sm text-gray-200">
                  Dynamic pricing strategies that maximize revenue and margin
                </p>
              </div>
            </div>

            <div class="bg-gray-800 rounded-lg p-4 mb-6">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-100">Revenue Increase</span>
                <span class="text-lg text-gray-200">25%</span>
              </div>
            </div>
          </div>

          <div
            class="bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              class="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-6"
            >
              <i class="fa-solid fa-code text-gray-200 text-2xl"></i>
            </div>
            <h3 class="text-2xl text-gray-300 mb-4">SaaS/Tech</h3>
            <p class="text-gray-200 mb-6 leading-relaxed">
              Enhance product intelligence, automate customer support, and
              optimize user engagement with AI integration.
            </p>

            <div class="space-y-4 mb-6">
              <div class="border-l-4 border-neutral-200 pl-4">
                <h4 class="text-gray-300 mb-1">Customer Support</h4>
                <p class="text-sm text-gray-200">
                  Reduce support tickets by 60% with intelligent chatbots
                </p>
              </div>
              <div class="border-l-4 border-neutral-200 pl-4">
                <h4 class="text-gray-300 mb-1">User Analytics</h4>
                <p class="text-sm text-gray-200">
                  Predict churn and optimize retention with behavioral analysis
                </p>
              </div>
              <div class="border-l-4 border-neutral-200 pl-4">
                <h4 class="text-gray-300 mb-1">Feature Intelligence</h4>
                <p class="text-sm text-gray-200">
                  Data-driven product decisions with AI-powered insights
                </p>
              </div>
            </div>

            <div class="bg-gray-800 rounded-lg p-4 mb-6">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-100">Churn Reduction</span>
                <span class="text-lg text-gray-200">40%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gray-900 rounded-lg p-6 text-center shadow-sm">
            <i class="fa-solid fa-hospital text-gray-200 text-3xl mb-3"></i>
            <h4 class="text-gray-300 mb-2">Healthcare</h4>
            <p class="text-sm text-gray-200">
              Diagnostic assistance &amp; patient care optimization
            </p>
          </div>
          <div class="bg-gray-900 rounded-lg p-6 text-center shadow-sm">
            <i
              class="fa-solid fa-university text-gray-200 text-3xl mb-3"
            ></i>
            <h4 class="text-gray-300 mb-2">Financial Services</h4>
            <p class="text-sm text-gray-200">
              Risk assessment &amp; fraud detection systems
            </p>
          </div>
          <div class="bg-gray-900 rounded-lg p-6 text-center shadow-sm">
            <i class="fa-solid fa-industry text-gray-200 text-3xl mb-3"></i>
            <h4 class="text-gray-300 mb-2">Manufacturing</h4>
            <p class="text-sm text-gray-200">
              Predictive maintenance &amp; quality control
            </p>
          </div>
          <div class="bg-gray-900 rounded-lg p-6 text-center shadow-sm">
            <i
              class="fa-solid fa-graduation-cap text-gray-200 text-3xl mb-3"
            ></i>
            <h4 class="text-gray-300 mb-2">Education</h4>
            <p class="text-sm text-gray-200">
              Personalized learning &amp; administrative automation
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- <section id="about" class="bg-gray-900 py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="mb-8">
              <h2 class="text-4xl text-gray-300 mb-4">
                Led by Experts in AI and Software Integration
              </h2>
              <p class="text-xl text-gray-200 leading-relaxed">
                Our leadership combines deep technical expertise with strategic
                business acumen to deliver AI solutions that drive real results.
              </p>
            </div>

            <div class="space-y-6 mb-8">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="fa-solid fa-award text-gray-200"></i>
                </div>
                <div>
                  <h3 class="text-gray-300 mb-1">
                    10+ years experience in software engineering
                  </h3>
                  <p class="text-gray-200 text-sm">
                    Deep technical foundation in enterprise software development
                    and architecture
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="fa-solid fa-brain text-gray-200"></i>
                </div>
                <div>
                  <h3 class="text-gray-300 mb-1">
                    AI/ML specialization since 2018
                  </h3>
                  <p class="text-gray-200 text-sm">
                    Early adopters with proven track record in machine learning
                    implementation
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="fa-solid fa-users text-gray-200"></i>
                </div>
                <div>
                  <h3 class="text-gray-300 mb-1">
                    Fortune 500 consulting experience
                  </h3>
                  <p class="text-gray-200 text-sm">
                    Strategic consulting background with major enterprise
                    clients
                  </p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="text-center p-4 bg-gray-800 rounded-lg">
                <div class="text-2xl text-gray-300 mb-1">50+</div>
                <div class="text-sm text-gray-200">
                  AI Projects Delivered
                </div>
              </div>
              <div class="text-center p-4 bg-gray-800 rounded-lg">
                <div class="text-2xl text-gray-300 mb-1">$5M+</div>
                <div class="text-sm text-gray-200">
                  Client Value Generated
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-gray-800 rounded-xl p-8">
              <div class="flex items-start space-x-6">
                <img
                  src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=12345"
                  alt="Founder"
                  class="w-24 h-24 rounded-full"
                />
                <div>
                  <h3 class="text-2xl text-gray-300 mb-2">Michael Chen</h3>
                  <p class="text-lg text-gray-200 mb-4">
                    Founder &amp; Chief AI Strategist
                  </p>
                  <p class="text-gray-100 leading-relaxed mb-4">
                    Former Principal Engineer at Google AI, Michael led the
                    development of enterprise ML platforms serving millions of
                    users. His expertise spans deep learning, natural language
                    processing, and large-scale distributed systems.
                  </p>
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center text-sm text-gray-200">
                      <i class="fa-solid fa-graduation-cap mr-2"></i>
                      PhD Computer Science, Stanford
                    </div>
                    <div class="flex items-center text-sm text-gray-200">
                      <i class="fa-brands fa-linkedin mr-2"></i>
                      <span class="hover:text-gray-300 cursor-pointer"
                        >Connect</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-800 rounded-xl p-8">
              <div class="flex items-start space-x-6">
                <img
                  src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=67890"
                  alt="Co-founder"
                  class="w-24 h-24 rounded-full"
                />
                <div>
                  <h3 class="text-2xl text-gray-300 mb-2">
                    Sarah Rodriguez
                  </h3>
                  <p class="text-lg text-gray-200 mb-4">
                    Co-founder &amp; Head of Strategy
                  </p>
                  <p class="text-gray-100 leading-relaxed mb-4">
                    Former McKinsey partner with 12 years of experience in
                    digital transformation and AI strategy for Fortune 100
                    companies. Sarah bridges the gap between technical
                    capability and business value.
                  </p>
                  <div class="flex items-center space-x-4">
                    <div class="flex items-center text-sm text-gray-200">
                      <i class="fa-solid fa-graduation-cap mr-2"></i>
                      MBA Harvard Business School
                    </div>
                    <div class="flex items-center text-sm text-gray-200">
                      <i class="fa-brands fa-linkedin mr-2"></i>
                      <span class="hover:text-gray-300 cursor-pointer"
                        >Connect</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-800 rounded-xl p-6 border border-neutral-200">
              <h4 class="text-gray-300 mb-2">Industry Recognition</h4>
              <ul class="space-y-1 text-sm text-gray-100">
                <li>
                  • Featured in AI Business Magazine "Top 40 Under 40" (2024)
                </li>
                <li>• Keynote speaker at AI Summit 2023 &amp; 2024</li>
                <li>• Published research in Nature Machine Intelligence</li>
                <li>• Advisory board member for 3 AI startups</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section id="testimonials" class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl text-gray-300 mb-4">What Our Clients Say</h2>
          <p class="text-xl text-gray-200 max-w-3xl mx-auto">
            Real results from real partnerships. See how we've helped
            organizations transform their operations with AI.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-12">
          <div class="bg-gray-900 rounded-xl p-8 shadow-sm">
            <div class="flex items-center mb-6">
              <div class="flex text-neutral-400">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
            <blockquote class="text-gray-100 text-lg leading-relaxed mb-6">
              "AIConsult transformed our legal research process. What used to
              take our associates 8 hours now takes 45 minutes with 95%
              accuracy. The ROI was evident within the first month."
            </blockquote>
            <div class="flex items-center">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=11111"
                alt="Client"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div class="text-gray-300">David Thompson</div>
                <div class="text-gray-200 text-sm">Managing Partner</div>
                <div class="text-neutral-500 text-sm">
                  Thompson &amp; Associates Law
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 rounded-xl p-8 shadow-sm">
            <div class="flex items-center mb-6">
              <div class="flex text-neutral-400">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
            <blockquote class="text-gray-100 text-lg leading-relaxed mb-6">
              "Our inventory costs dropped by 30% and stockouts decreased by 85%
              after implementing their demand forecasting solution. The team's
              expertise is unmatched."
            </blockquote>
            <div class="flex items-center">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=22222"
                alt="Client"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div class="text-gray-300">Lisa Martinez</div>
                <div class="text-gray-200 text-sm">VP of Operations</div>
                <div class="text-neutral-500 text-sm">
                  RetailMax Corporation
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 rounded-xl p-8 shadow-sm">
            <div class="flex items-center mb-6">
              <div class="flex text-neutral-400">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
            <blockquote class="text-gray-100 text-lg leading-relaxed mb-6">
              "The AI-powered customer support system reduced our ticket volume
              by 60% while improving satisfaction scores. Exceptional strategic
              guidance throughout the project."
            </blockquote>
            <div class="flex items-center">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=33333"
                alt="Client"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div class="text-gray-300">James Wilson</div>
                <div class="text-gray-200 text-sm">CTO</div>
                <div class="text-neutral-500 text-sm">TechFlow Solutions</div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-900 rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center mb-4">
                <div
                  class="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mr-4"
                >
                  <div class="text-neutral-500 text-sm">LOGO</div>
                </div>
                <div>
                  <div class="text-gray-300">Global Manufacturing Corp</div>
                  <div class="text-gray-200 text-sm">
                    Fortune 500 Manufacturing
                  </div>
                </div>
              </div>
              <blockquote class="text-gray-100 text-lg leading-relaxed mb-4">
                "AIConsult's predictive maintenance solution prevented $2.3M in
                potential equipment failures and reduced unplanned downtime by
                78%. Their systematic approach gave us confidence throughout the
                implementation."
              </blockquote>
              <div class="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=44444"
                  alt="Client"
                  class="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div class="text-gray-300 text-sm">Robert Chen</div>
                  <div class="text-gray-200 text-xs">
                    Chief Operations Officer
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-gray-800 rounded-lg p-4">
                <div class="text-2xl text-gray-200 mb-1">$2.3M</div>
                <div class="text-sm text-gray-200">
                  Cost Savings in Year 1
                </div>
              </div>
              <div class="bg-gray-800 rounded-lg p-4">
                <div class="text-2xl text-gray-200 mb-1">78%</div>
                <div class="text-sm text-gray-200">
                  Reduction in Downtime
                </div>
              </div>
              <div class="bg-gray-800 rounded-lg p-4">
                <div class="text-2xl text-gray-200 mb-1">6 months</div>
                <div class="text-sm text-gray-200">Full ROI Achieved</div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div class="text-2xl text-gray-300 mb-1">4.9/5</div>
              <div class="text-sm text-gray-200">Average Rating</div>
            </div>
            <div>
              <div class="text-2xl text-gray-300 mb-1">50+</div>
              <div class="text-sm text-gray-200">Happy Clients</div>
            </div>
            <div>
              <div class="text-2xl text-gray-300 mb-1">98%</div>
              <div class="text-sm text-gray-200">Project Success Rate</div>
            </div>
            <div>
              <div class="text-2xl text-gray-300 mb-1">100%</div>
              <div class="text-sm text-gray-200">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section id="about" class="py-24 bg-black">
      <div class="container mx-auto px-6">
       
  
        <div class="bg-gray-800 rounded-xl p-8">
          <h3 class="text-3xl font-bold text-gray-100 mb-8 text-center">
            The Team
          </h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <img
                src="/taleb.png"
                alt="CEO"
                class="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 class="text-xl font-bold text-gray-100">Ali Taleb</h4>
              <p class="text-white font-medium mb-2">CEO &amp; Co-Founder</p>
              <p class="text-gray-400 text-sm">
                Former Archer Avionics Engineer with patents in flight deck
                systems and product ownership of the Auxiliary Control Panels;
                later drove $500K+ in eVTOL engineering services sales at Vigelon
              </p>
            </div>
            <div class="text-center">
              <img
                src="/fawaz.png"
                alt="CTO"
                class="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 class="text-xl font-bold text-gray-100">Ali Fawaz</h4>
              <p class="text-white font-medium mb-2">CTO &amp; Co-Founder</p>
              <p class="text-gray-400 text-sm">
                Former Software Specialist at Accenture, expert in predictive
                maintenance software implementation. Built applications for
                startups and leads software consulting projects
              </p>
            </div>
  
            <div class="text-center">
              <img
                src="/solowka.png"
                alt="CEO"
                class="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 class="text-xl font-bold text-gray-100">Eric Solowka</h4>
              <p class="text-white font-medium mb-2">Advisor</p>
              <p class="text-gray-400 text-sm">
                40+ years leadership experience; Co-Founder Atlantis Aerospace,
                Director at Thales, Founding Partner iXY Leadership
              </p>
            </div>
  
            <div class="text-center">
              <img
                src="/azamskyi.png"
                alt="CEO"
                class="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 class="text-xl font-bold text-gray-100">Jacob Azamskyi</h4>
              <p class="text-white font-medium mb-2">Software Developer</p>
              <p class="text-gray-400 text-sm">
                Former Software Developer at SmartClick Solutions
              </p>
            </div>
  
            <div class="text-center">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                alt="CEO"
                class="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 class="text-xl font-bold text-gray-100">Myriam Torres</h4>
              <p class="text-white font-medium mb-2">Software Developer</p>
              <p class="text-gray-400 text-sm">
                Junior Software Developer at Vigelon Consulting
              </p>
            </div>
  
            <div class="text-center">
              <img
                src="/hamren.png"
                alt="CEO"
                class="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 class="text-xl font-bold text-gray-100">John Hamren</h4>
              <p class="text-white font-medium mb-2">Customer Success Manager</p>
              <p class="text-gray-400 text-sm">
                Former Sales Manager & Go-To-Market Strategy Specialist at FitX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="cta-banner"
      class="bg-black py-20 px-6 relative overflow-hidden"
    >
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-10 left-10 w-20 h-20 bg-gray-900 rounded-full"
        ></div>
        <div
          class="absolute top-32 right-20 w-16 h-16 bg-gray-900 rounded-full"
        ></div>
        <div
          class="absolute bottom-20 left-1/4 w-12 h-12 bg-gray-900 rounded-full"
        ></div>
        <div
          class="absolute bottom-40 right-1/3 w-24 h-24 bg-gray-900 rounded-full"
        ></div>
      </div>

      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h2 class="text-5xl text-white mb-6">
          Ready to explore AI for your business?
        </h2>
        <p class="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Join 50+ companies that have transformed their operations with our AI
          solutions. Get started with a free consultation and discover your AI
          potential.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#contact"
            class="bg-gray-900 text-gray-300 px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg text-center"
          >
            Book a Free Consultation
          </a>
          <!-- <button
            class="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-gray-300 transition-colors text-lg"
          >
            Download AI Readiness Guide
          </button> -->
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gray-900 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fa-solid fa-calendar-check text-white text-xl"></i>
            </div>
            <h3 class="text-white mb-2">Free 30-min Consultation</h3>
            <p class="text-neutral-300 text-sm">No commitment, just insights</p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gray-900 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fa-solid fa-chart-line text-white text-xl"></i>
            </div>
            <h3 class="text-white mb-2">ROI Assessment</h3>
            <p class="text-neutral-300 text-sm">Quantify your AI opportunity</p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gray-900 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <i class="fa-solid fa-road text-white text-xl"></i>
            </div>
            <h3 class="text-white mb-2">Custom Roadmap</h3>
            <p class="text-neutral-300 text-sm">Tailored implementation plan</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="bg-black py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-4xl text-gray-300 mb-6">Let's Talk AI</h2>
            <p class="text-xl text-gray-200 mb-8 leading-relaxed">
              Ready to transform your business with AI? We'd love to hear about
              your challenges and explore how we can help you achieve your
              goals.
            </p>

            <div class="space-y-6 mb-8">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="fa-solid fa-phone text-gray-200"></i>
                </div>
                <div>
                  <h3 class="text-gray-300 mb-1">Phone</h3>
                  <p class="text-gray-200">+1 (819) 329-6620</p>
                  <p class="text-sm text-neutral-500">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="fa-solid fa-envelope text-gray-200"></i>
                </div>
                <div>
                  <h3 class="text-gray-300 mb-1">Email</h3>
                  <p class="text-gray-200">info@vigelon.com</p>
                  <p class="text-sm text-neutral-500">
                    We respond within 2 hours
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i class="fa-solid fa-map-marker-alt text-gray-200"></i>
                </div>
                <div>
                  <h3 class="text-gray-300 mb-1">Office</h3>
                  <p class="text-gray-200">2415 Holly Ln.<br />Ottawa, ON</p>
                  <p class="text-sm text-neutral-500">By appointment only</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-800 rounded-lg p-6">
              <h3 class="text-gray-300 mb-4">What to expect:</h3>
              <ul class="space-y-2">
                <li class="flex items-center text-sm text-gray-100">
                  <i class="fa-solid fa-check text-gray-200 mr-3"></i>
                  30-minute discovery call within 24 hours
                </li>
                <li class="flex items-center text-sm text-gray-100">
                  <i class="fa-solid fa-check text-gray-200 mr-3"></i>
                  Preliminary AI opportunity assessment
                </li>
                <li class="flex items-center text-sm text-gray-100">
                  <i class="fa-solid fa-check text-gray-200 mr-3"></i>
                  Custom proposal within 1 week
                </li>
                <li class="flex items-center text-sm text-gray-100">
                  <i class="fa-solid fa-check text-gray-200 mr-3"></i>
                  No obligation or sales pressure
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-gray-800 rounded-xl p-8">
            <!-- Success/Error Messages -->
            <div v-if="submitStatus.message" class="mb-6">
              <div
                :class="[
                  'p-4 rounded-lg text-sm',
                  submitStatus.success
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200',
                ]"
              >
                {{ submitStatus.message }}
              </div>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid gap-6">
                <div>
                  <label class="block text-sm text-gray-300 mb-2"
                    >Name *</label
                  >
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors"
                    placeholder="John"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm text-gray-300 mb-2"
                  >Email Address *</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label class="block text-sm text-gray-300 mb-2"
                  >Company</label
                >
                <input
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label class="block text-sm text-gray-300 mb-2"
                  >Message *</label
                >
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                :class="[
                  'w-full py-4 rounded-lg transition-colors text-lg',
                  isSubmitting
                    ? 'bg-neutral-400 text-neutral-200 cursor-not-allowed'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800',
                ]"
              >
                {{ isSubmitting ? "Sending..." : "Send Message" }}
              </button>

              <p class="text-xs text-neutral-500 text-center">
                By submitting this form, you agree to our privacy policy. We'll
                never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- <section id="resources" class="bg-gray-800 py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl text-gray-300 mb-4">
            AI Resources &amp; Insights
          </h2>
          <p class="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay ahead of the AI curve with our latest research, guides, and
            industry insights
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-12">
          <div
            class="bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              class="w-full h-48 bg-neutral-200 rounded-lg mb-6 flex items-center justify-center"
            >
              <div class="text-center">
                <i
                  class="fa-solid fa-file-pdf text-4xl text-neutral-400 mb-2"
                ></i>
                <p class="text-neutral-500">AI Readiness Guide</p>
              </div>
            </div>
            <div class="mb-2">
              <span
                class="bg-gray-800 text-neutral-800 text-xs px-2 py-1 rounded"
                >GUIDE</span
              >
            </div>
            <h3 class="text-xl text-gray-300 mb-3">
              The Complete AI Readiness Assessment Guide
            </h3>
            <p class="text-gray-200 mb-4 text-sm">
              A comprehensive 25-page guide to evaluating your organization's
              readiness for AI implementation, including checklists and
              frameworks.
            </p>
            <button
              class="text-gray-200 hover:text-gray-100 transition-colors"
            >
              Download Free Guide <i class="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>

          <div
            class="bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              class="w-full h-48 bg-neutral-200 rounded-lg mb-6 flex items-center justify-center"
            >
              <div class="text-center">
                <i
                  class="fa-solid fa-chart-bar text-4xl text-neutral-400 mb-2"
                ></i>
                <p class="text-neutral-500">ROI Calculator</p>
              </div>
            </div>
            <div class="mb-2">
              <span
                class="bg-gray-800 text-neutral-800 text-xs px-2 py-1 rounded"
                >TOOL</span
              >
            </div>
            <h3 class="text-xl text-gray-300 mb-3">
              AI ROI Calculator &amp; Business Case Builder
            </h3>
            <p class="text-gray-200 mb-4 text-sm">
              Interactive tool to calculate potential ROI from AI initiatives
              and build compelling business cases for stakeholders.
            </p>
            <button
              class="text-gray-200 hover:text-gray-100 transition-colors"
            >
              Use Calculator <i class="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>

          <div
            class="bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              class="w-full h-48 bg-neutral-200 rounded-lg mb-6 flex items-center justify-center"
            >
              <div class="text-center">
                <i class="fa-solid fa-video text-4xl text-neutral-400 mb-2"></i>
                <p class="text-neutral-500">Webinar Series</p>
              </div>
            </div>
            <div class="mb-2">
              <span
                class="bg-gray-800 text-neutral-800 text-xs px-2 py-1 rounded"
                >WEBINAR</span
              >
            </div>
            <h3 class="text-xl text-gray-300 mb-3">
              AI Strategy Masterclass Series
            </h3>
            <p class="text-gray-200 mb-4 text-sm">
              Monthly webinar series covering AI trends, implementation
              strategies, and real-world case studies from industry leaders.
            </p>
            <button
              class="text-gray-200 hover:text-gray-100 transition-colors"
            >
              Register Now <i class="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>

        <div class="bg-gray-900 rounded-xl p-8 shadow-sm">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-2xl text-gray-300 mb-4">
                Latest AI Industry Report
              </h3>
              <p class="text-gray-200 mb-6">
                Our annual "State of AI in Enterprise 2025" report analyzes
                implementation trends, success factors, and ROI data from 500+
                companies across industries.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-100">
                  <i class="fa-solid fa-check text-gray-200 mr-2"></i>
                  Industry benchmarks and success metrics
                </li>
                <li class="flex items-center text-sm text-gray-100">
                  <i class="fa-solid fa-check text-gray-200 mr-2"></i>
                  Common implementation challenges and solutions
                </li>
                <li class="flex items-center text-sm text-gray-100">
                  <i class="fa-solid fa-check text-gray-200 mr-2"></i>
                  2025 AI trend predictions and recommendations
                </li>
              </ul>
              <button
                class="bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Download Report
              </button>
            </div>
            <div
              class="bg-gray-800 rounded-lg p-8 text-center h-64 flex items-center justify-center"
            >
              <div>
                <i
                  class="fa-solid fa-chart-pie text-6xl text-neutral-400 mb-4"
                ></i>
                <p class="text-neutral-500">2025 AI Enterprise Report</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
  <footer id="footer" class="bg-black text-white py-16 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-4 gap-8 mb-12">
        <div class="lg:col-span-2">
          <div class="flex items-center mb-6">
            <img src="/logo-with-name.png" alt="Vigelon Consulting logo" class="w-48 h-20" />
          </div>
          <span
            class="text-neutral-400 mb-6 leading-relaxed font-light max-w-md"
          >
            Transforming businesses through strategic AI implementation. We help
            organizations unlock the full potential of artificial intelligence
            with proven methodologies and expert guidance.
          </span>
          <div class="flex items-center space-x-4">
            <span
              class="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              <i class="fa-brands fa-linkedin text-neutral-300"></i>
            </span>
            <span
              class="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              <i class="fa-brands fa-twitter text-neutral-300"></i>
            </span>
            <span
              class="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              <i class="fa-brands fa-youtube text-neutral-300"></i>
            </span>
          </div>
        </div>

        <div>
          <h3 class="text-lg mb-6">Services</h3>
          <ul class="space-y-3">
            <li>
              <span
                class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >AI Readiness Assessment</span
              >
            </li>
            <li>
              <span
                class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >Pilot Projects</span
              >
            </li>
            <li>
              <span
                class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >Executive Workshops</span
              >
            </li>
            <li>
              <span
                class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >Implementation Support</span
              >
            </li>
            <li>
              <span
                class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >AI Strategy Consulting</span
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg mb-6">Company</h3>
          <ul class="space-y-3">
            <li>
              <span
                class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >About Us</span
              >
            </li>
            <li>
              <span
                class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >Our Process</span
              >
            </li>
            <li>
              <span
                class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >Case Studies</span
              >
            </li>
            <li>
              <span
                class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >Resources</span
              >
            </li>
            <li>
              <span
                class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >Contact</span
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-neutral-800 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div class="flex items-center space-x-6 text-sm text-neutral-400">
            <span>© 2025 Vigelon Consulting. All rights reserved.</span>
           
          </div>
          <div class="flex items-center space-x-6 text-sm text-neutral-400">
            <div class="flex items-center">
              <i class="fa-solid fa-phone mr-2"></i>
              <span>+1 (819) 329-6620</span>
            </div>
            <div class="flex items-center">
              <i class="fa-solid fa-envelope mr-2"></i>
              <span>info@vigelon.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);
const form = ref({
  name: "",
  email: "",
  company: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref({
  success: false,
  message: "",
});

const videoPlayer = ref(null);
const videoPlaceholder = ref(null);
const isVideoPlaying = ref(false);

const playVideo = () => {
  if (videoPlayer.value) {
    if (videoPlayer.value.paused) {
      videoPlayer.value.play();
      isVideoPlaying.value = true;
    } else {
      videoPlayer.value.pause();
      isVideoPlaying.value = false;
    }
  }
};

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark");
};

const handleSubmit = async () => {
  try {
    isSubmitting.value = true;
    submitStatus.value = { success: false, message: "" };

    // Validate form
    if (!form.value.name || !form.value.email || !form.value.message) {
      throw new Error("Please fill in all required fields");
    }

    // Send form data to API
    const response = await $fetch("/api/contact", {
      method: "POST",
      body: form.value,
    });

    if (response.status === 200) {
      submitStatus.value = {
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      };
      // Reset form
      form.value = {
        name: "",
        email: "",
        company: "",
        message: "",
      };
    } else {
      throw new Error(response.message || "Failed to send message");
    }
  } catch (error) {
    submitStatus.value = {
      success: false,
      message: error.message || "Something went wrong. Please try again.",
    };
  } finally {
    isSubmitting.value = false;
  }
};

// Video player functionality
onMounted(() => {
  // Mobile Menu Toggle (if needed in the future)
  // const mobileMenuButton = document.getElementById("mobile-menu-button");
  // const mobileMenu = document.getElementById("mobile-menu");

  // Sticky Header
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("py-2");
      header.classList.add("shadow-md");
    } else {
      header.classList.remove("py-2");
      header.classList.remove("shadow-md");
    }
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
// Mobile Menu Toggle
</script>

<style scoped>
/* Hero Animation Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
body {
  font-family: "Nunito", sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes floatUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero Section Animations */
.hero-title {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-subtitle {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-buttons {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.hero-stats {
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.hero-visual {
  animation: fadeInRight 0.8s ease-out 0.3s both;
}

.hero-main-card {
  animation: fadeIn 1s ease-out 0.5s both;
}

.hero-floating-card-1 {
  animation: floatUp 0.8s ease-out 0.9s both;
}

.hero-floating-card-2 {
  animation: floatUp 0.8s ease-out 1.1s both;
}

/* Add subtle hover effects */
.hero-buttons a,
.hero-buttons button {
  transition: all 0.3s ease;
}

.hero-buttons a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hero-buttons button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hero-floating-card-1,
.hero-floating-card-2 {
  transition: transform 0.3s ease;
}

.hero-floating-card-1:hover,
.hero-floating-card-2:hover {
  transform: translateY(-3px);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .hero-visual {
    animation: fadeInUp 0.8s ease-out 0.7s both;
  }
}
</style>
