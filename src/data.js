export const api = {

    getPokemonList: async ({ url }) => {
        return new Promise((resolve) => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        });
    },

    getPokemonInfo: async (url) => {
        return new Promise((resolve) => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        });
    }
};