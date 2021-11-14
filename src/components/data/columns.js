export const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email", filterPlaceholder: "Filter" },
    { title: "Phone Number", field: "phone" },
    { title: "Age", field: "age" },
    { title: "Gender", field: "gender", lookup:{M:'Male',F:'Female'} },
    { title: "City", field: "city" },
    { title: "School Fee", field: "fee", type: 'currency',
     currencySetting:{currencyCode:'NIS', minimumFractionDigits:0} },
]