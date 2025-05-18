export const sample_table_data = [
    {
        id: 1,
        entityName: 'Customer',
        attributeName: 'CustomerID',
        businessMeaningEntity: 'Represents an individual or organization that purchases products or services.',
        businessMeaningAttribute: 'A unique identifier assigned to each customer for record-keeping and retrieval.',
        description:
            'The CustomerID attribute is a critical field that uniquely distinguishes each customer within the database. It is typically generated automatically and is used extensively across different business processes and reports. This identifier ensures that all customer-related transactions, communications, and records are accurately associated with the correct customer, reducing the possibility of errors or data mismatches. In addition, it supports the enforcement of referential integrity in relational database systems by acting as a primary key. For example, when a customer places an order, the system uses the CustomerID to link the order with the appropriate customer account. This linkage facilitates robust data analytics, customer segmentation, personalized marketing efforts, and customer support operations.'
    },
    {
        id: 2,
        entityName: 'Order',
        attributeName: 'OrderDate',
        businessMeaningEntity: 'Captures the transaction data when a customer places an order.',
        businessMeaningAttribute: 'The specific date and time when an order was initiated by the customer.',
        description:
            'OrderDate is an essential timestamp in the order processing lifecycle, marking when the order was formally submitted by the customer. This attribute is used for auditing, performance tracking, fulfillment prioritization, and historical sales analysis. From a logistics perspective, OrderDate helps determine delivery expectations, production schedules, and inventory allocation. In reporting, trends in order placement dates can uncover peak periods, customer purchasing behavior, and help in forecasting future demand. OrderDate is also frequently cross-referenced with other time-based attributes such as ShippingDate and DeliveryDate to evaluate operational efficiency and customer satisfaction levels. It plays a vital role in calculating metrics such as average order processing time, delivery lead time, and seasonal order patterns.'
    }
];