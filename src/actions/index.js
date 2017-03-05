import axios from 'axios';

export function toggleSidebarVisibility() {
  return {type: 'TOGGLE_SIDEBAR_VIS'};
}

export function sortReports(sortAsc) {
  return {type: 'SORT_REPORTS', sortAsc};
}

export function loadReports() {
  const result = axios.get('/src/data/sidebar.json');

  // payload promise - via middlewere redux-promise
  return {type: 'LOAD_REPORTS', payload: result};
}

export function filterReports(term) {
  return {type: 'FILTER_REPORTS', term};
}
