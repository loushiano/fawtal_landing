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

    <!-- Blog Content -->
    <article class="py-12 px-6" v-if="blog">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <div class="flex items-center space-x-2 text-sm text-neutral-600">
            <NuxtLink to="/" class="hover:text-neutral-900">Home</NuxtLink>
            <i class="fa-solid fa-chevron-right text-xs"></i>
            <NuxtLink to="/blogs" class="hover:text-neutral-900">Blog</NuxtLink>
            <i class="fa-solid fa-chevron-right text-xs"></i>
            <span class="text-neutral-900">{{ blog.title }}</span>
          </div>
        </nav>

        <!-- Article Header -->
        <header class="mb-12">
          <div class="mb-6">
            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {{ blog.category }}
            </span>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            {{ blog.title }}
          </h1>
          
          <div class="flex items-center space-x-6 text-neutral-600 mb-8">
            <div class="flex items-center space-x-2">
              <i class="fa-solid fa-calendar"></i>
              <span>{{ blog.date }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <i class="fa-solid fa-clock"></i>
              <span>{{ blog.readTime }}</span>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="h-96 rounded-xl relative overflow-hidden mb-12">
            <img :src="blog.image" alt="blog-image" class="w-full h-full object-cover rounded-xl" />
          </div>
        </header>

        <!-- Article Content -->
       <component :is="blog.content" />

        <!-- Share Section -->
        <div class="border-t pt-8 mt-12">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-neutral-900 mb-2">Share this article</h3>
              <div class="flex items-center space-x-4">
                <button class="flex items-center space-x-2 text-neutral-600 hover:text-blue-600 transition-colors">
                  <i class="fa-brands fa-linkedin"></i>
                  <span>LinkedIn</span>
                </button>
                <button class="flex items-center space-x-2 text-neutral-600 hover:text-blue-400 transition-colors">
                  <i class="fa-brands fa-twitter"></i>
                  <span>Twitter</span>
                </button>
              </div>
            </div>
            
            <NuxtLink 
              to="/blogs"
              class="flex items-center space-x-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <i class="fa-solid fa-arrow-left"></i>
              <span>Back to Blog</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </article>

    <!-- 404 State -->
    <div v-else class="py-20 px-6 text-center">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold text-neutral-900 mb-4">Blog Post Not Found</h1>
        <p class="text-xl text-neutral-600 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <NuxtLink 
          to="/blogs"
          class="bg-neutral-900 text-white px-8 py-4 rounded-lg hover:bg-neutral-800 transition-colors inline-flex items-center space-x-2"
        >
          <i class="fa-solid fa-arrow-left"></i>
          <span>Back to Blog</span>
        </NuxtLink>
      </div>
    </div>

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
import Blog1 from '~/components/blog1.vue'

const route = useRoute()
const slug = route.params.slug

// Blog data - in a real app, this would come from a CMS or API
const blogs = {
  'smart-software-solutions-backbone-modern-business': {
    id: 1,
    slug: 'smart-software-solutions-backbone-modern-business',
    title: '🧠 Why Smart Software Solutions Are the Backbone of Modern Business',
    excerpt: "Let's talk now—not about buzzwords or vague promises, but about real problems companies face every day.",
    date: 'January 11, 2025',
    category: 'AI & Automation',
    readTime: '3 min read',
    image: '/blog-1.png',
    content: Blog1
  }
}


const blog = computed(() => blogs[slug] || null)

// SEO
useHead(() => ({
  title: blog.value ? `${blog.value.title} | NovoProg Blog` : 'Blog Post Not Found | NovoProg',
  meta: [
    {
      name: 'description',
      content: blog.value ? blog.value.excerpt : 'Blog post not found'
    },
    {
      property: 'og:title',
      content: blog.value ? `${blog.value.title} | NovoProg Blog` : 'Blog Post Not Found'
    },
    {
      property: 'og:description',
      content: blog.value ? blog.value.excerpt : 'Blog post not found'
    }
  ]
}))
</script>

<style scoped>
.prose {
  color: #374151;
}

.prose h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.prose p {
  margin-bottom: 1rem;
}
</style> 