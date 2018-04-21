export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
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
      name: 'Colors',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'icon-pencil',
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
