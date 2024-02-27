const { getRegionUrl } = require('@storyblok/region-helper')
const SYNC_TYPES = ['folders', 'components', 'roles', 'stories', 'datasources']

const COMMANDS = {
  GENERATE_MIGRATION: 'generate-migration',
  IMPORT: 'import',
  LOGIN: 'login',
  LOGOUT: 'logout',
  PULL_COMPONENTS: 'pull-components',
  PUSH_COMPONENTS: 'push-components',
  QUICKSTART: 'quickstart',
  ROLLBACK_MIGRATION: 'rollback-migration',
  RUN_MIGRATION: 'run-migration',
  SCAFFOLD: 'scaffold',
  SELECT: 'select',
  SPACES: 'spaces',
  SYNC: 'sync',
  DELETE_DATASOURCES: 'delete-datasources'
}

const DEFAULT_AGENT = {
  SB_Agent: 'SB-CLI',
  SB_Agent_Version: process.env.npm_package_version || '3.0.0'
}

const REGIONS = {
  cn: {
    name: 'China'
  },
  eu: {
    name: 'Europe'
  },
  us: {
    name: 'United States'
  },
  ca: {
    name: 'Canada'
  },
  ap: {
    name: 'Australia'
  }
}

const getRegionApiEndpoint = (region) => `${getRegionUrl(region)}/v1/`

// todo: FIND OUT IF THIS WORKS WITH us
const USERS_ROUTES = {
  LOGIN: `${getRegionApiEndpoint('usa')}users/login`,
  SIGNUP: `${getRegionApiEndpoint('eu')}users/signup`
}

module.exports = {
  SYNC_TYPES,
  USERS_ROUTES,
  COMMANDS,
  DEFAULT_AGENT,
  REGIONS,
  getRegionApiEndpoint
}
