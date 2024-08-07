/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723062419", {
    template: `
    <div>
        <nav class="bg-purple-800 p-4 shadow-lg">
            <div class="container mx-auto flex justify-between">
                <div class="flex space-x-4">
                    <a href="#" class="text-white hover:text-purple-300">Home</a>
                    <a href="#" class="text-white hover:text-purple-300">About</a>
                    <a href="#" class="text-white hover:text-purple-300">Contact</a>
                </div>
            </div>
        </nav>
    </div>
    <footer id="footer-section" class="flex-1 bg-white dark:bg-purple-800">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-purple-700 lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white hover:text-purple-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            BlockChain Beacon
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400 hover:text-purple-300">
                        © 2023 BlockChain Beacon. Illuminating the world of blockchain, one discovery at a time.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
