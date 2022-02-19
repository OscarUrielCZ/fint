const budgets = [
    {
        id: 1,
        month: 1,
        year: 2022
    },
    {
        id: 2,
        month: 12,
        year: 2021
    }
];

export const getBudgetList = () => budgets;

export const getBudgetDetails = id => {
    const res = budgets.filter(x => x.id === id);
    return res.length == 0 ? null : res[0];
};