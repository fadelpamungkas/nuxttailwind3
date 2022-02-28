<template>
    <div class="w-full bg-gradient-to-br from-white to-gray-200 text-gray-900">
        <nav
            class="mx-auto flex max-w-screen-xl items-center justify-between p-8"
        >
            <nuxt-link to="/" class="text-xl font-medium tracking-wide"
                >SnapWork</nuxt-link
            >
            <ul class="flex items-center space-x-4">
                <li v-for="menu in menus" :key="menu.name">
                    <nuxt-link to="/" class="group flex items-center gap-x-2">
                        <component
                            :is="menu.icon"
                            class="h-6 w-6 scale-0 rounded-lg bg-orange-500 fill-white p-1 transition duration-150 group-hover:scale-100"
                        ></component>
                        <span
                            class="text-md font-medium tracking-wider transition duration-150 group-hover:scale-110 group-hover:font-semibold"
                            >{{ menu.name }}</span
                        >
                    </nuxt-link>
                </li>
            </ul>
            <div class="space-x-6">
                <nuxt-link
                    to="/login"
                    class="rounded-2xl bg-orange-500 px-6 py-3 font-medium text-white shadow-lg transition duration-150 hover:bg-orange-600"
                    >Log In</nuxt-link
                >
                <nuxt-link
                    to="/signup"
                    class="rounded-2xl border border-orange-500 px-6 py-3 font-medium text-orange-500 shadow-lg transition duration-150"
                    >Sign Up</nuxt-link
                >
            </div>
        </nav>
        <section
            class="mx-auto flex max-w-screen-xl justify-between py-28 px-8"
        >
            <div class="max-w-2xl">
                <div class="relative w-2/3">
                    <input
                        id="search"
                        type="search"
                        class="focus:shadow-outline w-full rounded-lg py-4 px-6 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-md transition duration-150 hover:shadow-lg focus:border-0 focus:shadow-lg focus:outline-none"
                        placeholder="Search for a service"
                    />
                    <div class="absolute right-5 top-3.5 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>

                <h1 class="mt-8 text-6xl font-bold leading-tight">
                    Hire best freelancer for any job, online
                </h1>
                <p
                    class="mt-8 max-w-md font-light leading-relaxed text-gray-500"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                    viverra lorem vulputate luctus. Sollicitudin vitae nulla
                    amet pellentesque. Nunc magna mauris risus bibendum et,
                    malesuada viverra nisl. Facilisis metus purus.
                </p>
                <div class="mt-12 space-x-8">
                    <nuxt-link
                        to="/login"
                        class="rounded-2xl bg-orange-500 px-6 py-3.5 font-medium text-white shadow-lg transition duration-150 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200"
                        >Get Started</nuxt-link
                    >
                    <nuxt-link
                        to="/signup"
                        class="rounded-2xl border border-orange-500 px-6 py-3.5 font-medium text-orange-500 shadow-lg transition duration-150 hover:shadow-xl"
                        >Learn More</nuxt-link
                    >
                </div>
            </div>
            <div class="flex flex-1 flex-col">
                <img
                    class="max-w-lg self-end drop-shadow-2xl"
                    src="../assets/images/hero.png"
                    alt="hero"
                />
            </div>
        </section>
        <section
            class="mx-auto flex max-w-screen-xl items-center justify-between py-28 px-8"
        >
            <div class="aspect-square w-64 bg-slate-500"></div>
            <div class="flex flex-col items-start space-y-4">
                <h1
                    class="rounded-xl bg-orange-500 px-6 py-3 text-white shadow-lg"
                >
                    #OurAdvantage
                </h1>
                <h1 class="max-w-xl text-4xl font-bold">
                    A whole world of freelance talent at your fingertips
                </h1>
                <p
                    class="mt-8 max-w-md font-light leading-relaxed text-gray-500"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                    viverra lorem vulputate luctus. Sollicitudin vitae nulla
                    amet pellentesque.
                </p>
            </div>
        </section>
        <section
            class="mx-auto flex max-w-screen-xl flex-1 flex-col items-center justify-center py-28 px-8"
        >
            <h1 class="max-w-xl text-4xl font-bold">Why choose us?</h1>
            <p
                class="mt-8 max-w-md text-center font-light leading-relaxed text-gray-500"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                viverra lorem vulputate luctus.
            </p>
            <div class="mt-20 flex w-full justify-between gap-8">
                <!-- <postcard />

                <postcard class="-translate-y-12 transform" />

                <postcard /> -->
            </div>
        </section>
        <section
            class="mx-auto flex max-w-screen-xl flex-1 flex-col items-center justify-center space-y-8 py-28 px-8"
        >
            <h1 class="max-w-xl text-4xl font-bold">Review Clients</h1>
            <div class="mt-4 flex items-center justify-center -space-x-2">
                <div
                    v-for="(connection, idx) in connections"
                    v-bind:key="idx"
                    class="h-20 w-20 rounded-full shadow"
                >
                    <img
                        alt="img-1"
                        v-bind:src="connection.img"
                        class="h-full w-full rounded-full object-cover object-center"
                    />
                </div>
            </div>
            <h1
                class="mt-4 max-w-xl text-center text-sm font-normal text-gray-500"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </h1>
        </section>
        <section class="mt-20 w-full bg-amber-900">
            <div
                class="mx-auto flex max-w-screen-xl items-start justify-between p-8 text-white"
            >
                <div class>
                    <h1 class="mb-4 font-medium">SnapWork</h1>
                    <p class="max-w-xs font-light">
                        We always make our customer happy by providing as many
                        choice as possible.
                    </p>
                </div>
                <div class="flex items-center space-x-8">
                    <MapIcon class="h-10 w-10" />
                    <ShoppingCartIcon class="h-10 w-10" />
                    <BookmarkIcon class="h-10 w-10" />
                </div>
                <div>
                    <h1 class="mb-4 font-medium">Support</h1>
                    <p class="font-light">Terms and Conditions</p>
                    <p class="font-light">Privacy Policy</p>
                    <p class="font-light">FAQ</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import {
    MapIcon,
    TrendingUpIcon,
    ShoppingCartIcon,
    BookmarkIcon,
} from "@heroicons/vue/solid";

// const posts = await useFetch("/api/post");

const menus = [
    { name: "Explore", icon: MapIcon },
    { name: "Trending", icon: TrendingUpIcon },
    { name: "Order", icon: ShoppingCartIcon },
    { name: "Bookmark", icon: BookmarkIcon },
];
const connections = [
    {
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    },
    {
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    },
    {
        img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
    },
    {
        img: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
    },
];
</script>
