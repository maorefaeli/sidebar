export default function (state = null, action) {
  switch (action.type) {
    case 'LOAD_REPORTS':
      // promise resolved
      return Object.assign({}, state, {
        reports: action.payload.data,
        reportsAmount: action.payload.data.length,
        visibleReports: action.payload.data
      });
    case 'SORT_REPORTS':
      {
        // check if specifiec sort is requested or calc it from state
        const sortAsc = action.sortAsc || !state.sortAsc;
        return (Object.assign({}, state, {
          sortAsc,
          visibleReports: [...state.visibleReports].sort((a, b) => {
            const reverse = sortAsc
              ? 1
              : -1;
            return (a.updated - b.updated) * reverse;
          })
        }));
      }
    case 'FILTER_REPORTS':
      return Object.assign({}, state, {
        visibleReports: state.reports.filter((r) => {
          return (r.name.toLowerCase().includes(action.term.toLowerCase()));
        })
      });
    case 'TOGGLE_SIDEBAR_VIS':
      return Object.assign({}, state, {
        showSidebar: !state.showSidebar
      });
    default:
      return state || {
        reports: [],
        visibleReports: [],
        reportsAmount: 0,
        showSidebar: true,
        sortAsc: true
      };
  }
}
