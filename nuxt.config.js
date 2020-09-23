export default {
    ssr: false,

    target: 'static',

    head: {
        title: 'Gestión de problemas',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    css: ['~/assets/scss/main.scss', 'bootstrap-4-grid/css/grid.min.css'],

    axios: {
        baseURL: 'https://api-test.comunal.co/',
        headers: {
            common: {
                'Access-Control-Allow-Origin': '*',
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiZGVmYXVsdCIsImlzX2NvbXVuYWwiOmZhbHNlLCJpc3MiOiJ0ZXN0LmNvbXVuYWxjb3dvcmtpbmcuY29tIiwiaGFzX3BlbmRpbmdfaW52aXRhdGlvbiI6ZmFsc2UsImxvY2F0aW9uX2lkIjoibG9faWk0NTRpQUo1RjdEUTBwdCIsImhhc19mdWxsX3Byb2ZpbGUiOnRydWUsImJ1c2luZXNzX3R5cGUiOiJjb3dvcmtpbmciLCJleHAiOjE2MzI0MjQ1NjcsInVzZXIiOiJ1c19FejRURHJUQzRxRGxxaGliIiwiYnVzaW5lc3NfaWQiOiJjb211bmFsX2Nvd29ya2luZyIsImlhdCI6MTYwMDg4ODU2Nywib3V0bG9va19zeW5jZWQiOmZhbHNlLCJqdGkiOiJzZV9VaXozYlQ2TXdDeTRIa2NNIn0.MimFbnelMvZiT9qcLdWdCwfwkIxwO9Qfh7eo1zx_2OU',
            },
        },
    },

    plugins: [],

    components: true,

    buildModules: ['@nuxtjs/google-fonts'],

    googleFonts: {
        families: {
            Roboto: true,
            Montserrat: {
                wght: [400, 600],
            },
        },
    },

    modules: ['@nuxtjs/axios'],

    build: {},
}