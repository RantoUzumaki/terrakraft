import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
    url: "https://convergenz.in/terrakraft",
    consumerKey: "ck_94af76112511422a84ecb44ff8e82583290aab20",
    consumerSecret: "cs_6d4822126a9eab98b626a7415d28d6d0046e5f24",
    version: "wc/v3",
    queryStringAuth: true,
    axiosConfig: {
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },
    },
});

export const siteURL = "https://convergenz.in/terrakraft";

// export const api = new WooCommerceRestApi({
//     url: "https://localhost/terrakraft",
//     consumerKey: "ck_d6f1f1a95bb2e6dcdbc7b7d8116fff87785c1b4d",
//     consumerSecret: "cs_e0b8ffdadb78493059bead02b94ccad958b832cb",
//     version: "wc/v3",
//     queryStringAuth: true,
//     axiosConfig: {
//         headers: {'Content-Type': 'application/json',accept: 'application/json'},
//     },
// });

// export const siteURL = "https://localhost/terrakraft";
