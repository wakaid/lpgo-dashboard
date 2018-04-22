export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
      },
    },
    {
      title: true,
      name: 'Management',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Orders',
      icon: 'icon-layers',
      children: [
        {
          name: 'Incoming',
          url: '/incoming-orders',
          icon: 'icon-list',
        },
        {
          name: 'Need Completion',
          url: '/need-completion-orders',
          icon: 'icon-list',
        }
      ]

    },
    {
      name: 'Agents',
      url: '/base/tables',
      icon: 'icon-people',
    },
    {
      title: true,
      name: 'Analytics',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Region',
      url: '/base',
      icon: 'icon-chart',
      children: [
        {
          name: 'South Jakarta',
          url: '/base/breadcrumbs',
        },
        {
          name: 'East Jakarta',
          url: '/base/cards',
        },
        {
          name: 'Central Jakarta',
          url: '/base/carousels',
        },
        {
          name: 'West Jakarta',
          url: '/base/collapses',
        },
        {
          name: 'North Jakarta',
          url: '/base/dropdowns',
        },
        {
          name: 'Depok',
          url: '/base/forms',
        },
        {
          name: 'Bekasi',
          url: '/base/jumbotrons',
        }
      ],
    }
  ],
};
