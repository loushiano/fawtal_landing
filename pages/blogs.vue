<template>
  <div class="bg-white">
    <!-- Header -->
    <div id="header" class="py-4 px-6 bg-blue-50" style="background-color: #f2fcffcc">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="flex items-center">
            <NuxtLink to="/">
              <img src="/novo-old.png" alt="logo" class="md:w-48 w-40 h-24 mb-8" />
            </NuxtLink>
          </div>
        </div>

        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            to="/#hero"
            class="text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/#services"
            class="text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
            >Services</NuxtLink
          >
          <NuxtLink
            to="/#process"
            class="text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
            >Process</NuxtLink
          >
          <NuxtLink
            to="/#industries"
            class="text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
            >Industries</NuxtLink
          >
          <NuxtLink
            to="/blogs"
            class="text-neutral-900 font-semibold hover:text-neutral-700 transition-colors cursor-pointer"
            >Blogs</NuxtLink
          >
          <NuxtLink
            to="/#contact"
            class="text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
            >Contact</NuxtLink
          >
        </div>

        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/#contact"
            class="bg-neutral-900 text-white md:px-6 px-2 md:py-2 py-1 md:text-base text-xs rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Book Consultation
          </NuxtLink>
          <button class="lg:hidden p-2">
            <i class="fa-solid fa-bars text-neutral-700"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="py-20 px-6 bg-gradient-to-r from-neutral-50 to-blue-50">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-5xl font-bold text-neutral-900 mb-6">
          AI & Software Insights
        </h1>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
          Stay ahead with the latest trends, insights, and practical advice on AI implementation, 
          software solutions, and digital transformation strategies.
        </p>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <!-- Blog Post 1 -->
          <article class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img src="/blog-1.png" alt="blog-image" class="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
           
              <div class="absolute top-4 left-4">
                <span class="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  AI & Automation
                </span>
              </div>
            </img>
            
            <div class="p-6">
              <h2 class="text-xl font-bold text-neutral-900 mb-3 line-clamp-2">
                🧠 Why Smart Software Solutions Are the Backbone of Modern Business
              </h2>
              
              <p class="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                Let's talk now—not about buzzwords or vague promises, but about real problems companies face every day. 
                Are your teams stuck in slow, manual workflows? Do you rely heavily on human input, only to deal with costly errors?
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2 text-sm text-neutral-500">
                  <i class="fa-solid fa-calendar"></i>
                  <span>January 11, 2025</span>
                </div>
                <NuxtLink 
                  :to="'/blog/' + blogs[0].slug"
                  class="text-neutral-900 hover:text-neutral-700 font-medium text-sm flex items-center space-x-1"
                >
                  <span>Read More</span>
                  <i class="fa-solid fa-arrow-right text-xs"></i>
                </NuxtLink>
              </div>
            </div>
          </article>

          <!-- Placeholder Blog Posts -->
          <article class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div class="h-64 bg-gradient-to-br from-green-500 to-teal-600 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white">
                  <i class="fa-solid fa-chart-line text-6xl mb-4 opacity-80"></i>
                  <div class="text-sm font-medium opacity-90">Data Analytics</div>
                </div>
              </div>
              <div class="absolute top-4 left-4">
                <span class="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  Analytics
                </span>
              </div>
            </div>
            
            <div class="p-6">
              <h2 class="text-xl font-bold text-neutral-900 mb-3">
                📊 Turning Data Into Actionable Business Intelligence
              </h2>
              
              <p class="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                Discover how modern businesses are leveraging AI-powered analytics to make smarter decisions, 
                predict market trends, and stay ahead of the competition.
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2 text-sm text-neutral-500">
                  <i class="fa-solid fa-calendar"></i>
                  <span>Coming Soon</span>
                </div>
                <button class="text-neutral-400 font-medium text-sm flex items-center space-x-1 cursor-not-allowed">
                  <span>Coming Soon</span>
                </button>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div class="h-64 bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white">
                  <i class="fa-solid fa-robot text-6xl mb-4 opacity-80"></i>
                  <div class="text-sm font-medium opacity-90">Process Automation</div>
                </div>
              </div>
              <div class="absolute top-4 left-4">
                <span class="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  Automation
                </span>
              </div>
            </div>
            
            <div class="p-6">
              <h2 class="text-xl font-bold text-neutral-900 mb-3">
                🤖 The Complete Guide to Workflow Automation
              </h2>
              
              <p class="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                Learn how to identify automation opportunities in your business, implement smart workflows, 
                and measure the ROI of your automation initiatives.
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2 text-sm text-neutral-500">
                  <i class="fa-solid fa-calendar"></i>
                  <span>Coming Soon</span>
                </div>
                <button class="text-neutral-400 font-medium text-sm flex items-center space-x-1 cursor-not-allowed">
                  <span>Coming Soon</span>
                </button>
              </div>
            </div>
          </article>
        </div>

        <!-- Newsletter Signup -->
        <div class="mt-16 bg-neutral-50 rounded-xl p-8 text-center">
          <h3 class="text-2xl font-bold text-neutral-900 mb-4">
            Stay Updated with Our Latest Insights
          </h3>
          <p class="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Get the latest AI and software development insights delivered directly to your inbox. 
            No spam, just valuable content to help grow your business.
          </p>

          <!-- Success/Error Messages for Newsletter -->
          <div v-if="subscriptionStatus.message" class="mb-6 max-w-md mx-auto">
            <div
              :class="[
                'p-4 rounded-lg text-sm',
                subscriptionStatus.success
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              ]"
            >
              {{ subscriptionStatus.message }}
            </div>
          </div>

          <form @submit.prevent="handleSubscription" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              v-model="subscriptionEmail"
              type="email"
              required
              placeholder="Enter your email"
              class="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors"
            />
            <button 
              type="submit"
              :disabled="isSubscribing"
              :class="[
                'px-6 py-3 rounded-lg transition-colors',
                isSubscribing
                  ? 'bg-neutral-400 text-neutral-200 cursor-not-allowed'
                  : 'bg-neutral-900 text-white hover:bg-neutral-800'
              ]"
            >
              {{ isSubscribing ? 'Subscribing...' : 'Subscribe' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-neutral-900 text-white py-16 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-4 gap-8 mb-12">
          <div class="lg:col-span-2">
            <div class="flex items-center mb-6">
              <img src="/novo-old.png" alt="logo" class="w-48 h-20" />
            </div>
            <p class="text-neutral-400 mb-6 leading-relaxed font-light max-w-md">
              Transforming businesses through strategic AI implementation. We help
              organizations unlock the full potential of artificial intelligence
              with proven methodologies and expert guidance.
            </p>
          </div>

          <div>
            <h3 class="text-lg mb-6">Quick Links</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink
                  to="/#services"
                  class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >Services</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#process"
                  class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >Our Process</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/#industries"
                  class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >Industries</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/blogs"
                  class="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >Blog</NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg mb-6">Contact</h3>
            <ul class="space-y-3">
              <li class="flex items-center text-sm text-neutral-400">
                <i class="fa-solid fa-phone mr-2"></i>
                <span>+1 (819) 329-6620</span>
              </li>
              <li class="flex items-center text-sm text-neutral-400">
                <i class="fa-solid fa-envelope mr-2"></i>
                <span>info@novoprog.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-neutral-800 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="text-sm text-neutral-400">
              <span>© 2025 NovoProg. All rights reserved.</span>
            </div>
            <div class="flex items-center space-x-4">
              <span class="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer">
                <i class="fa-brands fa-linkedin text-neutral-300"></i>
              </span>
              <span class="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer">
                <i class="fa-brands fa-twitter text-neutral-300"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Blog data
const blogs = ref([
  {
    id: 1,
    slug: 'smart-software-solutions-backbone-modern-business',
    title: '🧠 Why Smart Software Solutions Are the Backbone of Modern Business',
    excerpt: "Let's talk now—not about buzzwords or vague promises, but about real problems companies face every day. Are your teams stuck in slow, manual workflows?",
    date: 'January 11, 2025',
    category: 'AI & Automation',
    readTime: '8 min read',
    image: '/blog-smart-software.jpg'
  }
])

// Newsletter subscription
const subscriptionEmail = ref('')
const isSubscribing = ref(false)
const subscriptionStatus = ref({
  success: false,
  message: ''
})

const handleSubscription = async () => {
  try {
    isSubscribing.value = true
    subscriptionStatus.value = { success: false, message: '' }

    // Validate email
    if (!subscriptionEmail.value) {
      throw new Error('Please enter your email address')
    }

    // Send subscription request to contact API
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: 'Newsletter Subscriber',
        email: subscriptionEmail.value,
        company: '',
        message: 'I would like to subscribe to your newsletter to receive the latest AI and software development insights.'
      }
    })

    if (response.status === 200) {
      subscriptionStatus.value = {
        success: true,
        message: 'Thank you for subscribing! You\'ll receive our latest insights in your inbox.'
      }
      // Reset email
      subscriptionEmail.value = ''
    } else {
      throw new Error(response.message || 'Failed to subscribe')
    }
  } catch (error) {
    subscriptionStatus.value = {
      success: false,
      message: error.message || 'Something went wrong. Please try again.'
    }
  } finally {
    isSubscribing.value = false
  }
}

// SEO
useHead({
  title: 'AI & Software Insights | NovoProg Blog',
  meta: [
    {
      name: 'description',
      content: 'Stay ahead with the latest trends, insights, and practical advice on AI implementation, software solutions, and digital transformation strategies.'
    },
    {
      property: 'og:title',
      content: 'AI & Software Insights | NovoProg Blog'
    },
    {
      property: 'og:description',
      content: 'Stay ahead with the latest trends, insights, and practical advice on AI implementation, software solutions, and digital transformation strategies.'
    }
  ]
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 