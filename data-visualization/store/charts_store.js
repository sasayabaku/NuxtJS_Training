export const state = () => ({
    simple: {
        label: ['AA', 'AB', 'AC'],
        data: [1000, 2000, 2500]
    },
    stocks: {
        days: null,
        last: null
    }
})

export const mutations = {
    setDays(state, days) {
        state.stocks.days = days;
    },
    setLast(state, last) {
        state.stocks.last = last;
    }
}