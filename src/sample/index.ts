export const sample_table_data = [
    {
        id: 1,
        entityName: 'Customer',
        attributeName: 'CustomerID',
        businessMeaningEntity: 'Represents an individual or organization that purchases products or services from the business across multiple platforms, including physical stores, online marketplaces, and subscription-based channels. This entity encapsulates all personal and transactional data relevant to identifying, contacting, and analyzing the customer for operational, marketing, and support purposes. In broader enterprise data architectures, the customer entity often acts as a cornerstone in CRM systems and master data management strategies, ensuring consistent and accurate customer representations across the organization.',
        businessMeaningAttribute: 'A unique identifier assigned to each customer for record-keeping and retrieval. It plays a crucial role in managing customer relationships, supporting automated system linkages, and enabling precise tracking of customer interactions across various digital and physical touchpoints. This attribute may also integrate with third-party systems for analytics, fraud detection, loyalty programs, and targeted promotions, ensuring that all customer-facing processes are tailored and data-driven.',
        description:
            'The CustomerID attribute is a critical field that uniquely distinguishes each customer within the database. It is typically generated automatically and is used extensively across different business processes and reports. This identifier ensures that all customer-related transactions, communications, and records are accurately associated with the correct customer, reducing the possibility of errors or data mismatches. In addition, it supports the enforcement of referential integrity in relational database systems by acting as a primary key. For example, when a customer places an order, the system uses the CustomerID to link the order with the appropriate customer account. This linkage facilitates robust data analytics, customer segmentation, personalized marketing efforts, and customer support operations.'
    },
    {
        id: 2,
        entityName: 'Order',
        attributeName: 'OrderDate',
        businessMeaningEntity: 'Captures the transaction data when a customer places an order through any available sales channel, whether online, in-store, mobile app, or via sales representatives. This entity provides the business with critical insight into consumer demand patterns, purchasing cycles, and regional or demographic order trends. The accumulated information supports forecasting, supply chain optimization, and strategic planning, often feeding into BI tools and operational dashboards for real-time decision-making.',
        businessMeaningAttribute: 'The specific date and time when an order was initiated by the customer. It serves as a foundational temporal attribute for a wide variety of business analytics functions, including but not limited to cohort analysis, trend detection, sales pipeline management, and performance evaluation of sales campaigns. Furthermore, it enables synchronization with external systems such as shipping carriers, ERP modules, and customer communication workflows, helping businesses maintain transparency and responsiveness.',
        description:
            'OrderDate is an essential timestamp in the order processing lifecycle, marking when the order was formally submitted by the customer. This attribute is used for auditing, performance tracking, fulfillment prioritization, and historical sales analysis. From a logistics perspective, OrderDate helps determine delivery expectations, production schedules, and inventory allocation. In reporting, trends in order placement dates can uncover peak periods, customer purchasing behavior, and help in forecasting future demand. OrderDate is also frequently cross-referenced with other time-based attributes such as ShippingDate and DeliveryDate to evaluate operational efficiency and customer satisfaction levels. It plays a vital role in calculating metrics such as average order processing time, delivery lead time, and seasonal order patterns.'
    },
    {
        id: 3,
        entityName: 'Product',
        attributeName: 'ProductDescription',
        businessMeaningEntity: 'Describes any tangible or intangible good that the organization offers for sale, rental, licensing, or subscription. The product entity encompasses metadata such as SKU, product family, versioning, pricing models, and lifecycle status. It plays a pivotal role in inventory management, procurement processes, marketing initiatives, and profitability analysis. Accurate representation of product entities ensures consistency in product catalogs, e-commerce platforms, and transactional documents across all departments.',
        businessMeaningAttribute: 'Provides a detailed explanation of what the product is, what features or benefits it includes, and how it differs from comparable products in the market. This attribute serves both customer-facing and internal operational purposes. It informs buyers, supports SEO strategies, feeds into recommendation engines, and supports call center scripts. Internally, the description contributes to classification, quality assurance, and audit trails across the product lifecycle, from R&D through to retirement.',
        description:
            'ProductDescription is designed to deliver a clear and concise summary of a product’s specifications, benefits, and use cases. It is leveraged across multiple digital channels including the company’s website, partner sites, printed catalogs, and advertisements. A well-crafted product description increases conversion rates, enhances search visibility, and builds brand trust. The structure of this description typically includes core features, use-case scenarios, compatibility information, and warranty/support details. It is also crucial in training sales representatives and customer service teams.'
    },
    {
        id: 4,
        entityName: 'Customer',
        attributeName: 'Customer_ID',
        businessMeaningEntity:
            'Represents an individual or organization that purchases products or services through various channels and can have diverse profiles based on region, behavior, and historical transaction patterns.',
        businessMeaningAttribute:
            'A unique identifier assigned to each customer for record-keeping and retrieval, used to track customer activity, preferences, and engagement across multiple platforms.',
        description:
            'The Customer_ID attribute is a critical field that uniquely distinguishes each customer within the database. It is typically generated automatically and is used extensively across different business processes and reports. This identifier ensures that all customer-related transactions, communications, and records are accurately associated with the correct customer, reducing the possibility of errors or data mismatches. In addition, it supports the enforcement of referential integrity in relational database systems by acting as a primary key. For example, when a customer places an order, the system uses the Customer_ID to link the order with the appropriate customer account. This linkage facilitates robust data analytics, customer segmentation, personalized marketing efforts, and customer support operations.'
    },
    {
        id: 5,
        entityName: 'Order',
        attributeName: 'Order_Date',
        businessMeaningEntity:
            'Captures the transaction data when a customer places an order including contextual metadata about the order’s source, environment, and submission medium.',
        businessMeaningAttribute:
            'The specific date and time when an order was initiated by the customer, logged within the system to track processing times, customer behavior, and sales metrics.',
        description:
            'Order_Date is an essential timestamp in the order processing lifecycle, marking when the order was formally submitted by the customer. This attribute is used for auditing, performance tracking, fulfillment prioritization, and historical sales analysis. From a logistics perspective, Order_Date helps determine delivery expectations, production schedules, and inventory allocation. In reporting, trends in order placement dates can uncover peak periods, customer purchasing behavior, and help in forecasting future demand. Order_Date is also frequently cross-referenced with other time-based attributes such as Shipping_Date and Delivery_Date to evaluate operational efficiency and customer satisfaction levels. It plays a vital role in calculating metrics such as average order processing time, delivery lead time, and seasonal order patterns.'
    }
];
