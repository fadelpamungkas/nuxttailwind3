<template>
    <div class="dark:bg-gray-900">
        <div class="flex w-full items-center justify-around py-4 px-8">
            <div class="flex w-3/5 items-center justify-evenly">
                <h1 class="px-4 py-4 font-bold text-white">SnapWork</h1>
                <nuxt-link to="/" class="px-6 py-4 font-medium text-white"
                    >Home</nuxt-link
                >
                <nuxt-link to="/about" class="px-6 py-4 font-medium text-white"
                    >About</nuxt-link
                >
                <nuxt-link to="/about" class="px-6 py-4 font-medium text-white"
                    >Community</nuxt-link
                >
                <nuxt-link to="/about" class="px-6 py-4 font-medium text-white"
                    >FAQ</nuxt-link
                >
            </div>
            <div class="flex w-1/5 items-center justify-evenly">
                <nuxt-link
                    to="/login"
                    class="rounded-xl bg-orange-500 px-6 py-2.5 font-semibold text-white shadow-lg transition duration-150 hover:bg-orange-600"
                    >Log In</nuxt-link
                >
                <nuxt-link
                    to="/signup"
                    class="bg-transparent px-6 py-2.5 font-semibold text-white transition duration-150 hover:bg-orange-600"
                    >Sign Up</nuxt-link
                >
            </div>
        </div>
        <div class="container mx-auto py-9 md:py-12 lg:py-24">
            <div
                class="items-strech mx-4 flex flex-col justify-center lg:flex-row"
            >
                <div class="flex items-center justify-center lg:w-4/12">
                    <div>
                        <h1
                            class="w-7/12 text-4xl font-semibold text-gray-900 dark:text-orange-500 md:text-5xl xl:text-6xl"
                        >
                            Amoire
                        </h1>
                        <p
                            class="mt-4 text-base leading-normal text-gray-600 dark:text-gray-300 md:w-7/12 lg:mt-5 lg:w-11/12 xl:w-10/12"
                        >
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using.
                        </p>
                    </div>
                </div>
                <div class="mt-6 md:mt-8 lg:mt-0 lg:w-8/12">
                    <div class="relative h-full w-full">
                        <img
                            src="https://i.ibb.co/gmV2mLr/pexels-maksim-goncharenok-4352247-1-1-1.png"
                            alt="A lounge sofa"
                            role="img"
                            class="relative hidden h-full w-full lg:block"
                        />
                        <img
                            src="https://i.ibb.co/Mhgkt2f/pexels-maksim-goncharenok-4352247-1-1-1.png"
                            alt="A lounge sofa"
                            role="img"
                            class="h-full w-full lg:hidden"
                        />
                        <div
                            class="absolute bottom-0 right-0 hidden w-1/2 bg-red-200 lg:block"
                        >
                            <button
                                class="flex w-full items-center justify-between bg-gray-800 p-5 text-xl font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 xl:p-6 xl:text-2xl"
                            >
                                Discover More
                                <div>
                                    <svg
                                        class="fill-stroke dark:hover:text-gray-600"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.66663 16H25.3333"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M20 21.3333L25.3333 16"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M20 10.667L25.3333 16.0003"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="mt-6 md:mt-8 lg:hidden">
                        <button
                            class="flex w-full items-center justify-between bg-gray-800 px-5 py-4 text-base font-semibold leading-tight text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-white dark:text-orange-500 dark:hover:bg-gray-800 dark:hover:text-gray-50 md:w-5/12 md:text-xl lg:py-7 lg:px-7"
                        >
                            Discover More
                            <div>
                                <svg
                                    class="fill-stroke"
                                    width="22"
                                    height="24"
                                    viewBox="0 0 22 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0)">
                                        <path
                                            d="M0.453735 12H14.4537"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M10.4539 16L14.4539 12"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M10.4539 8L14.4539 12"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect
                                                width="21.7269"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full bg-gray-100 pt-28 pb-28">
        <div class="flex items-center justify-center">
            <div class="container max-w-lg">
                <h1 class="font-boldc flex justify-center text-5xl">
                    Our Mission
                </h1>
                <p class="mt-8">
                    We are distinguished by our unsurpassed motivating
                    atmosphere, knowledgeable staff, and premier exercise
                    equipment, which supports our members in meeting their
                    individual fitness goals.
                </p>
                <h1 class="mt-5 font-bold">Join Now</h1>
            </div>
        </div>
        <div class="w-full px-4 pt-16">
            <div
                class="mx-auto w-full max-w-lg rounded-lg bg-white p-2 shadow-2xl"
            >
                <Disclosure v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75"
                    >
                        <span>What is your refund policy?</span>
                        <ChevronUpIcon
                            :class="open ? 'rotate-180 transform' : ''"
                            class="h-5 w-5 text-orange-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel
                        class="px-4 pt-4 pb-2 text-sm text-gray-500"
                    >
                        If you're unhappy with your purchase for any reason,
                        email us within 90 days and we'll refund you in full, no
                        questions asked.
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75"
                    >
                        <span>How can i book the workout class?</span>
                        <ChevronUpIcon
                            :class="open ? 'rotate-180 transform' : ''"
                            class="h-5 w-5 text-orange-500"
                        />
                    </DisclosureButton>
                    <DisclosurePanel
                        class="px-4 pt-4 pb-2 text-sm text-gray-500"
                    >
                        Booking a workout classe is simple for our members.
                        Simply log into your Gymme account on our website and
                        click "book class" button . You can book 3 days in
                        advance at 9pm. You can cancel your class online by
                        logging back in and click "cancel booking".
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </div>
    </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";

export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronUpIcon,
    },
};
</script>
