
/**
 * "config" store module
 */
import apiCall from '@/utils/api'
import i18n from '@/utils/locale'

const api = {
  getAdminRoles () {
    return apiCall({ url: 'config/admin_roles', method: 'get' })
  },
  getBaseActiveActive () {
    return apiCall({ url: 'config/base/active_active', method: 'get' })
  },
  getBaseAdvanced () {
    return apiCall({ url: 'config/base/advanced', method: 'get' })
  },
  getBaseAlerting () {
    return apiCall({ url: 'config/base/alerting', method: 'get' })
  },
  getBaseCaptivePortal () {
    return apiCall({ url: 'config/base/captive_portal', method: 'get' })
  },
  getBaseDatabase () {
    return apiCall({ url: 'config/base/database', method: 'get' })
  },
  getBaseDatabaseAdvanced () {
    return apiCall({ url: 'config/base/database_advanced', method: 'get' })
  },
  getBaseDatabaseEncryption () {
    return apiCall({ url: 'config/base/database_encryption', method: 'get' })
  },
  getBaseFencing () {
    return apiCall({ url: 'config/base/fencing', method: 'get' })
  },
  getBaseFingerbankDeviceChange () {
    return apiCall({ url: 'config/base/fingerbank_device_change', method: 'get' })
  },
  getBaseGeneral () {
    return apiCall({ url: 'config/base/general', method: 'get' })
  },
  getBaseGuestsAdminRegistration () {
    return apiCall({ url: 'config/base/guests_admin_registration', method: 'get' })
  },
  getBaseInline () {
    return apiCall({ url: 'config/base/inline', method: 'get' })
  },
  getBaseMseTab () {
    return apiCall({ url: 'config/base/mse_tab', method: 'get' })
  },
  getBaseNetwork () {
    return apiCall({ url: 'config/base/network', method: 'get' })
  },
  getBaseNodeImport () {
    return apiCall({ url: 'config/base/node_import', method: 'get' })
  },
  getBaseParking () {
    return apiCall({ url: 'config/base/parking', method: 'get' })
  },
  getBasePFDHCP () {
    return apiCall({ url: 'config/base/pfdhcp', method: 'get' })
  },
  getBasePorts () {
    return apiCall({ url: 'config/base/ports', method: 'get' })
  },
  getBaseProvisioning () {
    return apiCall({ url: 'config/base/provisioning', method: 'get' })
  },
  getBaseRadiusConfiguration () {
    return apiCall({ url: 'config/base/radius_configuration', method: 'get' })
  },
  getBaseServices () {
    return apiCall({ url: 'config/base/services', method: 'get' })
  },
  getBaseSNMPTraps () {
    return apiCall({ url: 'config/base/snmp_traps', method: 'get' })
  },
  getBaseWebServices () {
    return apiCall({ url: 'config/base/web_services', method: 'get' })
  },
  getBillingTiers () {
    return apiCall({ url: 'config/billing_tiers', method: 'get' })
  },
  getConnectionProfiles () {
    return apiCall({ url: 'config/connection_profiles', method: 'get' })
  },
  getDeviceRegistrations () {
    return apiCall({ url: 'config/device_registrations', method: 'get' })
  },
  getDomains () {
    return apiCall({ url: 'config/domains', method: 'get' })
  },
  getFirewalls () {
    return apiCall({ url: 'config/firewalls', method: 'get' })
  },
  getFloatingDevices () {
    return apiCall({ url: 'config/floating_devices', method: 'get' })
  },
  getInterfaces () {
    return apiCall({ url: 'config/interfaces', method: 'get' })
  },
  getMaintenanceTasks () {
    return apiCall({ url: 'config/maintenance_tasks', method: 'get' })
  },
  getPkiProviders () {
    return apiCall({ url: 'config/pki_providers', method: 'get' })
  },
  getProvisionings () {
    return apiCall({ url: 'config/provisionings', method: 'get' })
  },
  getRealms () {
    return apiCall({ url: 'config/realms', method: 'get' })
  },
  getRoles () {
    return apiCall({ url: 'node_categories', method: 'get', params: { limit: 1000 } })
  },
  getRoutedNetworks () {
    return apiCall({ url: 'config/routed_networks', method: 'get', params: { limit: 1000 } })
  },
  getScans () {
    return apiCall({ url: 'config/scans', method: 'get' })
  },
  getSecurityEvents () {
    return apiCall({ url: 'config/security_events', method: 'get' })
  },
  getSources () {
    return apiCall({ url: 'config/sources', method: 'get' })
  },
  getSwitches () {
    return apiCall({ url: 'config/switches', method: 'get' })
  },
  getSwitchGroups () {
    return apiCall({ url: 'config/switch_groups', method: 'get' })
  },
  getSyslogForwarders () {
    return apiCall({ url: 'config/syslog_forwarders', method: 'get' })
  },
  getSyslogParsers () {
    return apiCall({ url: 'config/syslog_parsers', method: 'get' })
  },
  getTenants () {
    return apiCall({ url: 'tenants', method: 'get' })
  },
  getTrafficShapingPolicies () {
    return apiCall({ url: 'config/traffic_shaping_policies', method: 'get' })
  },
  getWmiRules () {
    return apiCall({ url: 'config/wmi_rules', method: 'get' })
  },
  getWrixLocations () {
    return apiCall({ url: 'wrix_locations', method: 'get' })
  }
}

const types = {
  LOADING: 'loading',
  DELETING: 'deleting',
  SUCCESS: 'success',
  ERROR: 'error'
}

const state = { // set intitial states to `false` (not `[]` or `{}`) to avoid infinite loop when response is empty.
  adminRolesStatus: '',
  adminRoles: false,
  baseActiveActiveStatus: '',
  baseActiveActive: false,
  baseAdvancedStatus: '',
  baseAdvanced: false,
  baseAlertingStatus: '',
  baseAlerting: false,
  baseCaptivePortalStatus: '',
  baseCaptivePortal: false,
  baseDatabaseStatus: '',
  baseDatabase: false,
  baseDatabaseAdvancedStatus: '',
  baseDatabaseAdvanced: false,
  baseDatabaseEncryptionStatus: '',
  baseDatabaseEncryption: false,
  baseFencingStatus: '',
  baseFencing: false,
  baseFingerbankDeviceChangeStatus: '',
  baseFingerbankDeviceChange: false,
  baseGeneralStatus: '',
  baseGeneral: false,
  baseGuestsAdminRegistrationStatus: '',
  baseGuestsAdminRegistration: false,
  baseInlineStatus: '',
  baseInline: false,
  baseMseTabStatus: '',
  baseMseTab: false,
  baseNetworkStatus: '',
  baseNetwork: false,
  baseNodeImportStatus: '',
  baseNodeImport: false,
  baseParkingStatus: '',
  baseParking: false,
  basePFDHCPStatus: '',
  basePFDHCP: false,
  basePortsStatus: '',
  basePorts: false,
  baseProvisioningStatus: '',
  baseProvisioning: false,
  baseRadiusConfigurationStatus: '',
  baseRadiusConfiguration: false,
  baseServicesStatus: '',
  baseServices: false,
  baseSNMPTrapsStatus: '',
  baseSNMPTraps: false,
  baseWebServicesStatus: '',
  baseWebServices: false,
  billingTiersStatus: '',
  billingTiers: false,
  connectionProfilesStatus: '',
  connectionProfiles: false,
  deviceRegistrationsStatus: '',
  deviceRegistrations: false,
  domainsStatus: '',
  domains: false,
  firewallsStatus: '',
  firewalls: false,
  floatingDevicesStatus: '',
  floatingDevices: false,
  interfacesStatus: '',
  interfaces: false,
  maintenanceTasksStatus: '',
  maintenanceTasks: false,
  pkiProvidersStatus: '',
  pkiProviders: false,
  provisioningsStatus: '',
  provisionings: false,
  realmsStatus: '',
  realms: false,
  rolesStatus: '',
  roles: false,
  routedNetworksStatus: '',
  routedNetworks: false,
  scansStatus: '',
  scans: false,
  securityEventsStatus: '',
  securityEvents: false,
  sourcesStatus: '',
  sources: false,
  switchesStatus: '',
  switches: false,
  switchGroupsStatus: '',
  switchGroups: false,
  syslogForwardersStatus: '',
  syslogForwarders: false,
  syslogParsersStatus: '',
  syslogParsers: false,
  tenantsStatus: '',
  tenants: false,
  trafficShapingPoliciesStatus: '',
  trafficShapingPolicies: false,
  wmiRulesStatus: '',
  wmiRules: false,
  wrixLocationsStatus: '',
  wrixLocations: false
}

const helpers = {
  sortSecurityEvents: (securityEvents) => {
    let sortedIds = Object.keys(securityEvents).sort((a, b) => {
      if (a === 'defaults') {
        return a
      } else if (!securityEvents[a].desc && !securityEvents[b].desc) {
        return a.localeCompare(b)
      } else if (!securityEvents[b].desc) {
        return a
      } else if (!securityEvents[a].desc) {
        return b
      } else {
        return securityEvents[a].desc.localeCompare(securityEvents[b].desc)
      }
    })
    let sortedSecurityEvents = []
    for (let id of sortedIds) {
      sortedSecurityEvents.push(securityEvents[id])
    }
    return sortedSecurityEvents
  },
  groupSwitches: (switches) => {
    let ret = []
    if (switches) {
      let groups = [...new Set(switches.map(sw => sw.group))]
      groups.forEach(function (group, index, groups) {
        ret.push({ group: group, switches: switches.filter(sw => sw.group === group) })
      })
    }
    return ret
  }
}

const getters = {
  isLoadingAdminRoles: state => {
    return state.adminRolesStatus === types.LOADING
  },
  isLoadingBaseActiveActive: state => {
    return state.baseActiveActiveStatus === types.LOADING
  },
  isLoadingBaseAdvanced: state => {
    return state.baseAdvancedStatus === types.LOADING
  },
  isLoadingBaseAlerting: state => {
    return state.baseAlertingStatus === types.LOADING
  },
  isLoadingBaseCaptivePortal: state => {
    return state.baseCaptivePortalStatus === types.LOADING
  },
  isLoadingBaseDatabase: state => {
    return state.baseDatabaseStatus === types.LOADING
  },
  isLoadingBaseDatabaseAdvanced: state => {
    return state.baseDatabaseAdvancedStatus === types.LOADING
  },
  isLoadingBaseDatabaseEncryption: state => {
    return state.baseDatabaseEncryptionStatus === types.LOADING
  },
  isLoadingBaseFencing: state => {
    return state.baseFencingStatus === types.LOADING
  },
  isLoadingBaseFingerbankDeviceChange: state => {
    return state.baseFingerbankDeviceChangeStatus === types.LOADING
  },
  isLoadingBaseGeneral: state => {
    return state.baseGeneralStatus === types.LOADING
  },
  isLoadingBaseGuestsAdminRegistration: state => {
    return state.baseGuestsAdminRegistrationStatus === types.LOADING
  },
  isLoadingBaseInline: state => {
    return state.baseInlineStatus === types.LOADING
  },
  isLoadingBaseMseTab: state => {
    return state.baseMseTabStatus === types.LOADING
  },
  isLoadingBaseNetwork: state => {
    return state.baseNetworkStatus === types.LOADING
  },
  isLoadingBaseNodeImport: state => {
    return state.baseNodeImportStatus === types.LOADING
  },
  isLoadingBaseParking: state => {
    return state.baseParkingStatus === types.LOADING
  },
  isLoadingBasePFDHCP: state => {
    return state.basePFDHCPStatus === types.LOADING
  },
  isLoadingBasePorts: state => {
    return state.basePortsStatus === types.LOADING
  },
  isLoadingBaseProvisioning: state => {
    return state.baseProvisioningStatus === types.LOADING
  },
  isLoadingBaseRadiusConfiguration: state => {
    return state.baseRadiusConfigurationStatus === types.LOADING
  },
  isLoadingBaseServices: state => {
    return state.baseServicesStatus === types.LOADING
  },
  isLoadingBaseSNMPTraps: state => {
    return state.baseSNMPTrapsStatus === types.LOADING
  },
  isLoadingBaseWebServices: state => {
    return state.baseWebServicesStatus === types.LOADING
  },
  isLoadingBillingTiers: state => {
    return state.billingTiersStatus === types.LOADING
  },
  isLoadingConnectionProfiles: state => {
    return state.connectionProfilesStatus === types.LOADING
  },
  isLoadingDeviceRegistrations: state => {
    return state.deviceRegistrationsStatus === types.LOADING
  },
  isLoadingDomains: state => {
    return state.domainsStatus === types.LOADING
  },
  isLoadingFirewalls: state => {
    return state.firewallsStatus === types.LOADING
  },
  isLoadingFloatingDevices: state => {
    return state.floatingDevicesStatus === types.LOADING
  },
  isLoadingInterfaces: state => {
    return state.interfacesStatus === types.LOADING
  },
  isLoadingMaintenanceTasks: state => {
    return state.maintenanceTasksStatus === types.LOADING
  },
  isLoadingPkiProviders: state => {
    return state.pkiProvidersStatus === types.LOADING
  },
  isLoadingProvisionings: state => {
    return state.provisioningsStatus === types.LOADING
  },
  isLoadingRealms: state => {
    return state.realmsStatus === types.LOADING
  },
  isLoadingRoles: state => {
    return state.rolesStatus === types.LOADING
  },
  isLoadingRoutedNetworks: state => {
    return state.routedNetworksStatus === types.LOADING
  },
  isLoadingScans: state => {
    return state.scansStatus === types.LOADING
  },
  isLoadingSecurityEvents: state => {
    return state.securityEventsStatus === types.LOADING
  },
  isLoadingSources: state => {
    return state.sourcesStatus === types.LOADING
  },
  isLoadingSwitches: state => {
    return state.switchesStatus === types.LOADING
  },
  isLoadingSwitchGroups: state => {
    return state.switchGroupsStatus === types.LOADING
  },
  isLoadingSyslogForwarders: state => {
    return state.syslogForwardersStatus === types.LOADING
  },
  isLoadingSyslogParsers: state => {
    return state.syslogParsersStatus === types.LOADING
  },
  isLoadingTenants: state => {
    return state.tenantsStatus === types.LOADING
  },
  isLoadingTrafficShapingPolicies: state => {
    return state.trafficShapingPoliciesStatus === types.LOADING
  },
  isLoadingWmiRules: state => {
    return state.wmiRulesStatus === types.LOADING
  },
  isLoadingWrixLocations: state => {
    return state.wrixLocationsStatus === types.LOADING
  },
  accessDurationsList: state => {
    if (!state.baseGuestsAdminRegistration) return []
    const unit2str = (unit, isPlural = false) => {
      const plural = (isPlural) ? 's' : ''
      switch (unit) {
        case 's': return (plural) ? i18n.t('seconds') : i18n.t('second')
        case 'm': return (plural) ? i18n.t('minutes') : i18n.t('minute')
        case 'h': return (plural) ? i18n.t('hours') : i18n.t('hour')
        case 'D': return (plural) ? i18n.t('days') : i18n.t('day')
        case 'W': return (plural) ? i18n.t('weeks') : i18n.t('week')
        case 'M': return (plural) ? i18n.t('months') : i18n.t('month')
        case 'Y': return (plural) ? i18n.t('years') : i18n.t('year')
      }
    }
    const unit2seconds = (unit) => {
      let seconds = 1
      switch (unit) { // compound seconds w/ fallthrough
        case 'Y': seconds *= 12
          /* falls through */
        case 'M': seconds *= 30.4375 // leap-year
          /* falls through */
        case 'W': seconds *= 7
          /* falls through */
        case 'D': seconds *= 24
          /* falls through */
        case 'h': seconds *= 60
          /* falls through */
        case 'm': seconds *= 60
          /* falls through */
      }
      return seconds
    }
    return state.baseGuestsAdminRegistration.access_duration_choices.split(',').map((duration) => {
      // destructure duration using regular expression
      const [
        // eslint-disable-next-line no-unused-vars
        _, // ignore
        interval, // \d+
        unit, // [smhDWMY]{1}
        base, // [FR]
        // eslint-disable-next-line no-unused-vars
        __, // ignore
        extendedInterval, // [+-]\d+
        extendedUnit // [smhDWMY]{1}
      ] = duration.match(/(\d+)([smhDWMY]){1}([FR])?(([+-]\d+)([smhDWMY]){1})?/)
      let name = interval + ' ' + unit2str(unit, Math.abs(interval) > 1)
      if (base && extendedInterval && extendedUnit) {
        let baseStr = ''
        switch (base) {
          case 'F': baseStr = unit2str('D'); break // relative to start of day
          case 'R': baseStr = unit2str(unit); break // relative to start of period (unit)
        }
        name += ' (@' + baseStr + ' ' + extendedInterval + ' ' + unit2str(extendedUnit, Math.abs(extendedInterval) > 1) + ')'
      }
      // fwd `sort`ing
      const sort = (~~interval * unit2seconds(unit)) + (~~extendedInterval * unit2seconds(extendedUnit))
      return { name: name, value: duration, sort: sort }
    }).sort((a, b) => {
      return (a.sort > b.sort) ? 1 : -1
    })
  },
  adminRolesList: state => {
    if (!state.adminRoles) return []
    return state.adminRoles.map((item) => {
      return { value: item.id, name: item.id }
    })
  },
  domainsList: state => {
    if (!state.domains) return []
    return state.domains.map((item) => {
      return { value: item.id, name: item.id }
    })
  },
  connectionProfilesList: state => {
    if (!state.connectionProfiles) return []
    return state.connectionProfiles.map((item) => {
      return { value: item.id, name: item.id, text: `${item.id} - ${item.description}` }
    })
  },
  realmsList: state => {
    if (!state.realms) return []
    return state.realms.map((item) => {
      return { value: item.id, name: item.id, text: item.id }
    })
  },
  rolesList: state => {
    if (!state.roles) return []
    return state.roles.map((item) => {
      return { value: item.category_id, name: item.name, text: `${item.name} - ${item.notes}` }
    })
  },
  sourcesList: state => {
    if (!state.sources) return []
    return state.sources.map((item) => {
      return { value: item.id, name: item.description, text: `${item.id} - ${item.description}` }
    })
  },
  switchGroupsList: state => {
    if (!state.switchGroups) return []
    return state.switchGroups.map((item) => {
      return { value: item.id, name: item.description }
    })
  },
  switchesList: state => {
    if (!state.switches) return []
    return state.switches.map((item) => {
      return { value: item.id, name: item.description }
    })
  },
  tenantsList: state => {
    if (!state.tenants) return []
    return state.tenants.map((item) => {
      return { value: item.id, name: item.name }
    })
  },
  securityEventsList: state => {
    return helpers.sortSecurityEvents(state.securityEvents).filter(securityEvent => securityEvent.enabled === 'Y').map((item) => {
      return { value: item.id, text: item.desc }
    })
  },
  sortedSecurityEvents: state => {
    return helpers.sortSecurityEvents(state.securityEvents)
  },
  groupedSwitches: state => {
    return helpers.groupSwitches(state.switches)
  }
}

const actions = {
  getAdminRoles: ({ state, getters, commit }) => {
    if (getters.isLoadingAdminRoles) {
      return
    }
    if (!state.adminRoles) {
      commit('ADMIN_ROLES_REQUEST')
      return api.getAdminRoles().then(response => {
        commit('ADMIN_ROLES_UPDATED', response.data.items)
        return state.adminRoles
      })
    } else {
      return Promise.resolve(state.adminRoles)
    }
  },
  getBaseActiveActive: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseActiveActive) {
      return
    }
    if (!state.baseActiveActive) {
      commit('BASE_ACTIVE_ACTIVE_REQUEST')
      return api.getBaseActiveActive().then(response => {
        commit('BASE_ACTIVE_ACTIVE_UPDATED', response.data.item)
        return state.baseActiveActive
      })
    } else {
      return Promise.resolve(state.baseActiveActive)
    }
  },
  getBaseAdvanced: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseAdvanced) {
      return
    }
    if (!state.baseAdvanced) {
      commit('BASE_ADVANCED_REQUEST')
      return api.getBaseAdvanced().then(response => {
        commit('BASE_ADVANCED_UPDATED', response.data.item)
        return state.baseAdvanced
      })
    } else {
      return Promise.resolve(state.baseAdvanced)
    }
  },
  getBaseAlerting: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseAlerting) {
      return
    }
    if (!state.baseAlerting) {
      commit('BASE_ALERTING_REQUEST')
      return api.getBaseAlerting().then(response => {
        commit('BASE_ALERTING_UPDATED', response.data.item)
        return state.baseAlerting
      })
    } else {
      return Promise.resolve(state.baseAlerting)
    }
  },
  getBaseCaptivePortal: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseCaptivePortal) {
      return
    }
    if (!state.baseCaptivePortal) {
      commit('BASE_CAPTIVE_PORTAL_REQUEST')
      return api.getBaseCaptivePortal().then(response => {
        commit('BASE_CAPTIVE_PORTAL_UPDATED', response.data.item)
        return state.baseCaptivePortal
      })
    } else {
      return Promise.resolve(state.baseCaptivePortal)
    }
  },
  getBaseDatabase: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseDatabase) {
      return
    }
    if (!state.baseDatabase) {
      commit('BASE_DATABASE_REQUEST')
      return api.getBaseDatabase().then(response => {
        commit('BASE_DATABASE_UPDATED', response.data.item)
        return state.baseDatabase
      })
    } else {
      return Promise.resolve(state.baseDatabase)
    }
  },
  getBaseDatabaseAdvanced: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseDatabaseAdvanced) {
      return
    }
    if (!state.baseDatabaseAdvanced) {
      commit('BASE_DATABASE_ADVANCED_REQUEST')
      return api.getBaseDatabaseAdvanced().then(response => {
        commit('BASE_DATABASE_ADVANCED_UPDATED', response.data.item)
        return state.baseDatabaseAdvanced
      })
    } else {
      return Promise.resolve(state.baseDatabaseAdvanced)
    }
  },
  getBaseDatabaseEncryption: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseDatabaseEncryption) {
      return
    }
    if (!state.baseDatabaseEncryption) {
      commit('BASE_DATABASE_ENCRYPTION_REQUEST')
      return api.getBaseDatabaseEncryption().then(response => {
        commit('BASE_DATABASE_ENCRYPTION_UPDATED', response.data.item)
        return state.baseDatabaseEncryption
      })
    } else {
      return Promise.resolve(state.baseDatabaseEncryption)
    }
  },
  getBaseFencing: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseFencing) {
      return
    }
    if (!state.baseFencing) {
      commit('BASE_FENCING_REQUEST')
      return api.getBaseFencing().then(response => {
        commit('BASE_FENCING_UPDATED', response.data.item)
        return state.baseFencing
      })
    } else {
      return Promise.resolve(state.baseFencing)
    }
  },
  getBaseFingerbankDeviceChange: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseFingerbankDeviceChange) {
      return
    }
    if (!state.baseFingerbankDeviceChange) {
      commit('BASE_FINGERBANK_DEVICE_CHANGE_REQUEST')
      return api.getBaseFingerbankDeviceChange().then(response => {
        commit('BASE_FINGERBANK_DEVICE_CHANGE_UPDATED', response.data.item)
        return state.baseFingerbankDeviceChange
      })
    } else {
      return Promise.resolve(state.baseFingerbankDeviceChange)
    }
  },
  getBaseGeneral: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseGeneral) {
      return
    }
    if (!state.baseGeneral) {
      commit('BASE_GENERAL_REQUEST')
      return api.getBaseGeneral().then(response => {
        commit('BASE_GENERAL_UPDATED', response.data.item)
        return state.baseGeneral
      })
    } else {
      return Promise.resolve(state.baseGeneral)
    }
  },
  getBaseGuestsAdminRegistration: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseGuestsAdminRegistration) {
      return
    }
    if (!state.baseGuestsAdminRegistration) {
      commit('BASE_GUESTS_ADMIN_REGISTRATION_REQUEST')
      return api.getBaseGuestsAdminRegistration().then(response => {
        commit('BASE_GUESTS_ADMIN_REGISTRATION_UPDATED', response.data.item)
        return state.baseGuestsAdminRegistration
      })
    } else {
      return Promise.resolve(state.baseGuestsAdminRegistration)
    }
  },
  getBaseInline: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseInline) {
      return
    }
    if (!state.baseInline) {
      commit('BASE_INLINE_REQUEST')
      return api.getBaseInline().then(response => {
        commit('BASE_INLINE_UPDATED', response.data.item)
        return state.baseInline
      })
    } else {
      return Promise.resolve(state.baseInline)
    }
  },
  getBaseMseTab: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseMseTab) {
      return
    }
    if (!state.baseMseTab) {
      commit('BASE_MSE_TAB_REQUEST')
      return api.getBaseMseTab().then(response => {
        commit('BASE_MSE_TAB_UPDATED', response.data.item)
        return state.baseMseTab
      })
    } else {
      return Promise.resolve(state.baseMseTab)
    }
  },
  getBaseNetwork: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseNetwork) {
      return
    }
    if (!state.baseNetwork) {
      commit('BASE_NETWORK_REQUEST')
      return api.getBaseNetwork().then(response => {
        commit('BASE_NETWORK_UPDATED', response.data.item)
        return state.baseNetwork
      })
    } else {
      return Promise.resolve(state.baseNetwork)
    }
  },
  getBaseNodeImport: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseNodeImport) {
      return
    }
    if (!state.baseNodeImport) {
      commit('BASE_NODE_IMPORT_REQUEST')
      return api.getBaseNodeImport().then(response => {
        commit('BASE_NODE_IMPORT_UPDATED', response.data.item)
        return state.baseNodeImport
      })
    } else {
      return Promise.resolve(state.baseNodeImport)
    }
  },
  getBaseParking: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseParking) {
      return
    }
    if (!state.baseParking) {
      commit('BASE_PARKING_REQUEST')
      return api.getBaseParking().then(response => {
        commit('BASE_PARKING_UPDATED', response.data.item)
        return state.baseParking
      })
    } else {
      return Promise.resolve(state.baseParking)
    }
  },
  getBasePFDHCP: ({ state, getters, commit }) => {
    if (getters.isLoadingBasePFDHCP) {
      return
    }
    if (!state.basePFDHCP) {
      commit('BASE_PFDHCP_REQUEST')
      return api.getBasePFDHCP().then(response => {
        commit('BASE_PFDHCP_UPDATED', response.data.item)
        return state.basePFDHCP
      })
    } else {
      return Promise.resolve(state.basePFDHCP)
    }
  },
  getBasePorts: ({ state, getters, commit }) => {
    if (getters.isLoadingBasePorts) {
      return
    }
    if (!state.basePorts) {
      commit('BASE_PORTS_REQUEST')
      return api.getBasePorts().then(response => {
        commit('BASE_PORTS_UPDATED', response.data.item)
        return state.basePorts
      })
    } else {
      return Promise.resolve(state.basePorts)
    }
  },
  getBaseProvisioning: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseProvisioning) {
      return
    }
    if (!state.baseProvisioning) {
      commit('BASE_PROVISIONING_REQUEST')
      return api.getBaseProvisioning().then(response => {
        commit('BASE_PROVISIONING_UPDATED', response.data.item)
        return state.baseProvisioning
      })
    } else {
      return Promise.resolve(state.baseProvisioning)
    }
  },
  getBaseRadiusConfiguration: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseRadiusConfiguration) {
      return
    }
    if (!state.baseRadiusConfiguration) {
      commit('BASE_RADIUS_CONFIGURATION_REQUEST')
      return api.getBaseRadiusConfiguration().then(response => {
        commit('BASE_RADIUS_CONFIGURATION_UPDATED', response.data.item)
        return state.baseRadiusConfiguration
      })
    } else {
      return Promise.resolve(state.baseRadiusConfiguration)
    }
  },
  getBaseServices: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseServices) {
      return
    }
    if (!state.baseServices) {
      commit('BASE_SERVICES_REQUEST')
      return api.getBaseServices().then(response => {
        commit('BASE_SERVICES_UPDATED', response.data.item)
        return state.baseServices
      })
    } else {
      return Promise.resolve(state.baseServices)
    }
  },
  getBaseSNMPTraps: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseSNMPTraps) {
      return
    }
    if (!state.baseSNMPTraps) {
      commit('BASE_SNMP_TRAPS_REQUEST')
      return api.getBaseSNMPTraps().then(response => {
        commit('BASE_SNMP_TRAPS_UPDATED', response.data.item)
        return state.baseSNMPTraps
      })
    } else {
      return Promise.resolve(state.baseSNMPTraps)
    }
  },
  getBaseWebServices: ({ state, getters, commit }) => {
    if (getters.isLoadingBaseWebServices) {
      return
    }
    if (!state.baseWebServices) {
      commit('BASE_WEB_SERVICES_REQUEST')
      return api.getBaseWebServices().then(response => {
        commit('BASE_WEB_SERVICES_UPDATED', response.data.item)
        return state.baseWebServices
      })
    } else {
      return Promise.resolve(state.baseWebServices)
    }
  },
  getBillingTiers: ({ state, getters, commit }) => {
    if (getters.isLoadingBillingTiers) {
      return
    }
    if (!state.billingTiers) {
      commit('BILLING_TIERS_REQUEST')
      return api.getBillingTiers().then(response => {
        commit('BILLING_TIERS_UPDATED', response.data.items)
        return state.billingTiers
      })
    } else {
      return Promise.resolve(state.billingTiers)
    }
  },
  getConnectionProfiles: ({ state, getters, commit }) => {
    if (getters.isLoadingConnectionProfiles) {
      return
    }
    if (!state.connectionProfiles) {
      commit('CONNECTION_PROFILES_REQUEST')
      return api.getConnectionProfiles().then(response => {
        commit('CONNECTION_PROFILES_UPDATED', response.data.items)
        return state.connectionProfiles
      })
    } else {
      return Promise.resolve(state.connectionProfiles)
    }
  },
  getDeviceRegistrations: ({ state, getters, commit }) => {
    if (getters.isLoadingDeviceRegistrations) {
      return
    }
    if (!state.deviceRegistrations) {
      commit('DEVICE_REGISTRATIONS_REQUEST')
      return api.getDeviceRegistrations().then(response => {
        commit('DEVICE_REGISTRATIONS_UPDATED', response.data.items)
        return state.deviceRegistrations
      })
    } else {
      return Promise.resolve(state.deviceRegistrations)
    }
  },
  getDomains: ({ state, getters, commit }) => {
    if (getters.isLoadingDomains) {
      return
    }
    if (!state.domains) {
      commit('DOMAINS_REQUEST')
      return api.getDomains().then(response => {
        commit('DOMAINS_UPDATED', response.data.items)
        return state.domains
      })
    } else {
      return Promise.resolve(state.domains)
    }
  },
  getFirewalls: ({ state, getters, commit }) => {
    if (getters.isLoadingFirewalls) {
      return
    }
    if (!state.firewalls) {
      commit('FIREWALLS_REQUEST')
      return api.getFirewalls().then(response => {
        commit('FIREWALLS_UPDATED', response.data.items)
        return state.firewalls
      })
    } else {
      return Promise.resolve(state.firewalls)
    }
  },
  getFloatingDevices: ({ state, getters, commit }) => {
    if (getters.isLoadingFloatingDevices) {
      return
    }
    if (!state.floatingDevices) {
      commit('FLOATING_DEVICES_REQUEST')
      return api.getFloatingDevices().then(response => {
        commit('FLOATING_DEVICES_UPDATED', response.data.items)
        return state.floatingDevices
      })
    } else {
      return Promise.resolve(state.floatingDevices)
    }
  },
  getInterfaces: ({ state, getters, commit }) => {
    if (getters.isLoadingInterfaces) {
      return
    }
    if (!state.interfaces) {
      commit('INTERFACES_REQUEST')
      return api.getInterfaces().then(response => {
        commit('INTERFACES_UPDATED', response.data.items)
        return state.interfaces
      })
    } else {
      return Promise.resolve(state.interfaces)
    }
  },
  getMaintenanceTasks: ({ state, getters, commit }) => {
    if (getters.isLoadingMaintenanceTasks) {
      return
    }
    if (!state.maintenanceTasks) {
      commit('MAINTENANCE_TASKS_REQUEST')
      return api.getMaintenanceTasks().then(response => {
        commit('MAINTENANCE_TASKS_UPDATED', response.data.items)
        return state.maintenanceTasks
      })
    } else {
      return Promise.resolve(state.maintenanceTasks)
    }
  },
  getPkiProviders: ({ state, getters, commit }) => {
    if (getters.isLoadingPkiProviders) {
      return
    }
    if (!state.pkiProviders) {
      commit('PKI_PROVIDERS_REQUEST')
      return api.getPkiProviders().then(response => {
        commit('PKI_PROVIDERS_UPDATED', response.data.items)
        return state.pkiProviders
      })
    } else {
      return Promise.resolve(state.pkiProviders)
    }
  },
  getProvisionings: ({ state, getters, commit }) => {
    if (getters.isLoadingProvisionings) {
      return
    }
    if (!state.provisionings) {
      commit('PROVISIONINGS_REQUEST')
      return api.getProvisionings().then(response => {
        commit('PROVISIONINGS_UPDATED', response.data.items)
        return state.provisionings
      })
    } else {
      return Promise.resolve(state.provisionings)
    }
  },
  getRealms: ({ state, getters, commit }) => {
    if (getters.isLoadingRealms) {
      return
    }
    if (!state.realms) {
      commit('REALMS_REQUEST')
      return api.getRealms().then(response => {
        commit('REALMS_UPDATED', response.data.items)
        return state.realms
      })
    } else {
      return Promise.resolve(state.realms)
    }
  },
  getRoles: ({ state, getters, commit }) => {
    if (getters.isLoadingRoles) {
      return
    }
    if (!state.roles) {
      commit('ROLES_REQUEST')
      return api.getRoles().then(response => {
        commit('ROLES_UPDATED', response.data.items)
        return state.roles
      })
    } else {
      return Promise.resolve(state.roles)
    }
  },
  getRoutedNetworks: ({ state, getters, commit }) => {
    if (getters.isLoadingRoutedNetworks) {
      return
    }
    if (!state.routedNetworks) {
      commit('ROUTED_NETWORKS_REQUEST')
      return api.getRoutedNetworks().then(response => {
        commit('ROUTED_NETWORKS_UPDATED', response.data.items)
        return state.routedNetworks
      })
    } else {
      return Promise.resolve(state.routedNetworks)
    }
  },
  getScans: ({ state, getters, commit }) => {
    if (getters.isLoadingScans) {
      return
    }
    if (!state.scans) {
      commit('SCANS_REQUEST')
      return api.getScans().then(response => {
        commit('SCANS_UPDATED', response.data.items)
        return state.scans
      })
    } else {
      return Promise.resolve(state.scans)
    }
  },
  getSecurityEvents: ({ commit, getters, state }) => {
    if (getters.isLoadingSecurityEvents) {
      return
    }
    if (!state.securityEvents) {
      commit('SECURITY_EVENTS_REQUEST')
      return api.getSecurityEvents().then(response => {
        commit('SECURITY_EVENTS_UPDATED', response.data.items)
        return state.securityEvents
      })
    } else {
      return Promise.resolve(state.securityEvents)
    }
  },
  getSources: ({ state, getters, commit }) => {
    if (getters.isLoadingSources) {
      return
    }
    if (!state.sources) {
      commit('SOURCES_REQUEST')
      return api.getSources().then(response => {
        commit('SOURCES_UPDATED', response.data.items)
        return state.sources
      })
    } else {
      return Promise.resolve(state.sources)
    }
  },
  getSwitches: ({ state, getters, commit }) => {
    if (getters.isLoadingSwitches) {
      return
    }
    if (!state.switches) {
      commit('SWICTHES_REQUEST')
      return api.getSwitches().then(response => {
        // group can be undefined
        response.data.items.forEach(function (item, index, items) {
          response.data.items[index] = Object.assign({ group: item.group || 'Default' }, item)
        })
        commit('SWICTHES_UPDATED', response.data.items)
        return state.switches
      })
    } else {
      return Promise.resolve(state.switches)
    }
  },
  getSwitchGroups: ({ state, getters, commit }) => {
    if (getters.isLoadingSwitchGroups) {
      return
    }
    if (!state.switchGroups) {
      commit('SWICTH_GROUPS_REQUEST')
      return api.getSwitchGroups().then(response => {
        commit('SWICTH_GROUPS_UPDATED', response.data.items)
        return state.switchGroups
      })
    } else {
      return Promise.resolve(state.switchGroups)
    }
  },
  getSyslogForwarders: ({ state, getters, commit }) => {
    if (getters.isLoadingSyslogForwarders) {
      return
    }
    if (!state.syslogForwarders) {
      commit('SYSLOG_FORWARDERS_REQUEST')
      return api.getSyslogForwarders().then(response => {
        commit('SYSLOG_FORWARDERS_UPDATED', response.data.items)
        return state.syslogForwarders
      })
    } else {
      return Promise.resolve(state.syslogForwarders)
    }
  },
  getSyslogParsers: ({ state, getters, commit }) => {
    if (getters.isLoadingSyslogParsers) {
      return
    }
    if (!state.syslogParsers) {
      commit('SYSLOG_PARSERS_REQUEST')
      return api.getSyslogParsers().then(response => {
        commit('SYSLOG_PARSERS_UPDATED', response.data.items)
        return state.syslogParsers
      })
    } else {
      return Promise.resolve(state.syslogParsers)
    }
  },
  getTenants: ({ state, getters, commit }) => {
    if (getters.isLoadingTenants) {
      return
    }
    if (!state.tenants) {
      commit('TENANTS_REQUEST')
      return api.getTenants().then(response => {
        commit('TENANTS_UPDATED', response.data.items)
        return state.tenants
      })
    } else {
      return Promise.resolve(state.tenants)
    }
  },
  getTrafficShapingPolicies: ({ state, getters, commit }) => {
    if (getters.isLoadingTrafficShapingPolicies) {
      return
    }
    if (!state.trafficShapingPolicies) {
      commit('TRAFFIC_SHAPING_POLICIES_REQUEST')
      return api.getTrafficShapingPolicies().then(response => {
        commit('TRAFFIC_SHAPING_POLICIES_UPDATED', response.data.items)
        return state.trafficShapingPolicies
      })
    } else {
      return Promise.resolve(state.trafficShapingPolicies)
    }
  },
  getWmiRules: ({ commit, getters, state }) => {
    if (getters.isLoadingWmiRules) {
      return
    }
    if (!state.wmiRules) {
      commit('WMI_RULES_REQUEST')
      return api.getWmiRules().then(response => {
        commit('WMI_RULES_UPDATED', response.data.items)
        return state.wmiRules
      })
    } else {
      return Promise.resolve(state.wmiRules)
    }
  },
  getWrixLocations: ({ commit, getters, state }) => {
    if (getters.isLoadingWrixLocations) {
      return
    }
    if (!state.wrixLocations) {
      commit('WRIX_LOCATIONS_REQUEST')
      return api.getWrixLocations().then(response => {
        commit('WRIX_LOCATIONS_UPDATED', response.data.items)
        return state.wrixLocations
      })
    } else {
      return Promise.resolve(state.wrixLocations)
    }
  }
}

const mutations = {
  ADMIN_ROLES_REQUEST: (state) => {
    state.adminRolesStatus = types.LOADING
  },
  ADMIN_ROLES_UPDATED: (state, adminRoles) => {
    state.adminRoles = adminRoles
    state.adminRolesStatus = types.SUCCESS
  },
  BASE_ACTIVE_ACTIVE_REQUEST: (state) => {
    state.baseActiveActiveStatus = types.LOADING
  },
  BASE_ACTIVE_ACTIVE_UPDATED: (state, baseActiveActive) => {
    state.baseActiveActive = baseActiveActive
    state.baseActiveActiveStatus = types.SUCCESS
  },
  BASE_ADVANCED_REQUEST: (state) => {
    state.baseAdvancedStatus = types.LOADING
  },
  BASE_ADVANCED_UPDATED: (state, baseAdvanced) => {
    state.baseAdvanced = baseAdvanced
    state.baseAdvancedStatus = types.SUCCESS
  },
  BASE_ALERTING_REQUEST: (state) => {
    state.baseAlertingStatus = types.LOADING
  },
  BASE_ALERTING_UPDATED: (state, baseAlerting) => {
    state.baseAlerting = baseAlerting
    state.baseAlertingStatus = types.SUCCESS
  },
  BASE_CAPTIVE_PORTAL_REQUEST: (state) => {
    state.baseCaptivePortalStatus = types.LOADING
  },
  BASE_CAPTIVE_PORTAL_UPDATED: (state, baseCaptivePortal) => {
    state.baseCaptivePortal = baseCaptivePortal
    state.baseCaptivePortalStatus = types.SUCCESS
  },
  BASE_DATABASE_REQUEST: (state) => {
    state.baseDatabaseStatus = types.LOADING
  },
  BASE_DATABASE_UPDATED: (state, baseDatabase) => {
    state.baseDatabase = baseDatabase
    state.baseDatabaseStatus = types.SUCCESS
  },
  BASE_DATABASE_ADVANCED_REQUEST: (state) => {
    state.baseDatabaseAdvancedStatus = types.LOADING
  },
  BASE_DATABASE_ADVANCED_UPDATED: (state, baseDatabaseAdvanced) => {
    state.baseDatabaseAdvanced = baseDatabaseAdvanced
    state.baseDatabaseAdvancedStatus = types.SUCCESS
  },
  BASE_DATABASE_ENCRYPTION_REQUEST: (state) => {
    state.baseDatabaseEncryptionStatus = types.LOADING
  },
  BASE_DATABASE_ENCRYPTION_UPDATED: (state, baseDatabaseEncryption) => {
    state.baseDatabaseEncryption = baseDatabaseEncryption
    state.baseDatabaseEncryptionStatus = types.SUCCESS
  },
  BASE_FENCING_REQUEST: (state) => {
    state.baseFencingStatus = types.LOADING
  },
  BASE_FENCING_UPDATED: (state, baseFencing) => {
    state.baseFencing = baseFencing
    state.baseFencingStatus = types.SUCCESS
  },
  BASE_FINGERBANK_DEVICE_CHANGE_REQUEST: (state) => {
    state.baseFingerbankDeviceChangeStatus = types.LOADING
  },
  BASE_FINGERBANK_DEVICE_CHANGE_UPDATED: (state, baseFingerbankDeviceChange) => {
    state.baseFingerbankDeviceChange = baseFingerbankDeviceChange
    state.baseFingerbankDeviceChangeStatus = types.SUCCESS
  },
  BASE_GENERAL_REQUEST: (state) => {
    state.baseGeneralStatus = types.LOADING
  },
  BASE_GENERAL_UPDATED: (state, baseGeneral) => {
    state.baseGeneral = baseGeneral
    state.baseGeneralStatus = types.SUCCESS
  },
  BASE_GUESTS_ADMIN_REGISTRATION_REQUEST: (state) => {
    state.baseGuestsAdminRegistrationStatus = types.LOADING
  },
  BASE_GUESTS_ADMIN_REGISTRATION_UPDATED: (state, baseGuestsAdminRegistration) => {
    state.baseGuestsAdminRegistration = baseGuestsAdminRegistration
    state.baseGuestsAdminRegistrationStatus = types.SUCCESS
  },
  BASE_INLINE_REQUEST: (state) => {
    state.baseInlineStatus = types.LOADING
  },
  BASE_INLINE_UPDATED: (state, baseInline) => {
    state.baseInline = baseInline
    state.baseInlineStatus = types.SUCCESS
  },
  BASE_MSE_TAB_REQUEST: (state) => {
    state.baseMseTabStatus = types.LOADING
  },
  BASE_MSE_TAB_UPDATED: (state, baseMseTab) => {
    state.baseMseTab = baseMseTab
    state.baseMseTabStatus = types.SUCCESS
  },
  BASE_NETWORK_REQUEST: (state) => {
    state.baseNetworkStatus = types.LOADING
  },
  BASE_NETWORK_UPDATED: (state, baseNetwork) => {
    state.baseNetwork = baseNetwork
    state.baseNetworkStatus = types.SUCCESS
  },
  BASE_NODE_IMPORT_REQUEST: (state) => {
    state.baseNodeImportStatus = types.LOADING
  },
  BASE_NODE_IMPORT_UPDATED: (state, baseNodeImport) => {
    state.baseNodeImport = baseNodeImport
    state.baseNodeImportStatus = types.SUCCESS
  },
  BASE_PARKING_REQUEST: (state) => {
    state.baseParkingStatus = types.LOADING
  },
  BASE_PARKING_UPDATED: (state, baseParking) => {
    state.baseParking = baseParking
    state.baseParkingStatus = types.SUCCESS
  },
  BASE_PFDHCP_REQUEST: (state) => {
    state.basePFDHCPStatus = types.LOADING
  },
  BASE_PFDHCP_UPDATED: (state, basePFDHCP) => {
    state.basePFDHCP = basePFDHCP
    state.basePFDHCPStatus = types.SUCCESS
  },
  BASE_PORTS_REQUEST: (state) => {
    state.basePortsStatus = types.LOADING
  },
  BASE_PORTS_UPDATED: (state, basePorts) => {
    state.basePorts = basePorts
    state.basePortsStatus = types.SUCCESS
  },
  BASE_PROVISIONING_REQUEST: (state) => {
    state.baseProvisioningStatus = types.LOADING
  },
  BASE_PROVISIONING_UPDATED: (state, baseProvisioning) => {
    state.baseProvisioning = baseProvisioning
    state.baseProvisioningStatus = types.SUCCESS
  },
  BASE_RADIUS_CONFIGURATION_REQUEST: (state) => {
    state.baseRadiusConfigurationStatus = types.LOADING
  },
  BASE_RADIUS_CONFIGURATION_UPDATED: (state, baseRadiusConfiguration) => {
    state.baseRadiusConfiguration = baseRadiusConfiguration
    state.baseRadiusConfigurationStatus = types.SUCCESS
  },
  BASE_SERVICES_REQUEST: (state) => {
    state.baseServicesStatus = types.LOADING
  },
  BASE_SERVICES_UPDATED: (state, baseServices) => {
    state.baseServices = baseServices
    state.baseServicesStatus = types.SUCCESS
  },
  BASE_SNMP_TRAPS_REQUEST: (state) => {
    state.baseSNMPTrapsStatus = types.LOADING
  },
  BASE_SNMP_TRAPS_UPDATED: (state, baseSNMPTraps) => {
    state.baseSNMPTraps = baseSNMPTraps
    state.baseSNMPTrapsStatus = types.SUCCESS
  },
  BASE_WEBSERVICES_REQUEST: (state) => {
    state.baseWebServicesStatus = types.LOADING
  },
  BASE_WEBSERVICES_UPDATED: (state, baseWebServices) => {
    state.baseWebServices = baseWebServices
    state.baseWebServicesStatus = types.SUCCESS
  },
  BILLING_TIERS_REQUEST: (state) => {
    state.billingTiersStatus = types.LOADING
  },
  BILLING_TIERS_UPDATED: (state, billingTiers) => {
    state.billingTiers = billingTiers
    state.billingTiersStatus = types.SUCCESS
  },
  CONNECTION_PROFILES_REQUEST: (state) => {
    state.connectionProfilesStatus = types.LOADING
  },
  CONNECTION_PROFILES_UPDATED: (state, connectionProfiles) => {
    state.connectionProfiles = connectionProfiles
    state.connectionProfilesStatus = types.SUCCESS
  },
  DEVICE_REGISTRATIONS_REQUEST: (state) => {
    state.deviceRegistrationsStatus = types.LOADING
  },
  DEVICE_REGISTRATIONS_UPDATED: (state, deviceRegistrations) => {
    state.deviceRegistrations = deviceRegistrations
    state.deviceRegistrationsStatus = types.SUCCESS
  },
  DOMAINS_REQUEST: (state) => {
    state.domainsStatus = types.LOADING
  },
  DOMAINS_UPDATED: (state, domains) => {
    state.domains = domains
    state.domainsStatus = types.SUCCESS
  },
  FIREWALLS_REQUEST: (state) => {
    state.firewallsStatus = types.LOADING
  },
  FIREWALLS_UPDATED: (state, firewalls) => {
    state.firewalls = firewalls
    state.firewallsStatus = types.SUCCESS
  },
  FLOATING_DEVICES_REQUEST: (state) => {
    state.floatingDevicesStatus = types.LOADING
  },
  FLOATING_DEVICES_UPDATED: (state, floatingDevices) => {
    state.floatingDevices = floatingDevices
    state.floatingDevicesStatus = types.SUCCESS
  },
  INTERFACES_REQUEST: (state) => {
    state.interfacesStatus = types.LOADING
  },
  INTERFACES_UPDATED: (state, interfaces) => {
    state.interfaces = interfaces
    state.interfacesStatus = types.SUCCESS
  },
  MAINTENANCE_TASKS_REQUEST: (state) => {
    state.maintenanceTasksStatus = types.LOADING
  },
  MAINTENANCE_TASKS_UPDATED: (state, maintenanceTasks) => {
    state.maintenanceTasks = maintenanceTasks
    state.maintenanceTasksStatus = types.SUCCESS
  },
  PKI_PROVIDERS_REQUEST: (state) => {
    state.pkiProvidersStatus = types.LOADING
  },
  PKI_PROVIDERS_UPDATED: (state, pkiProviders) => {
    state.pkiProviders = pkiProviders
    state.pkiProvidersStatus = types.SUCCESS
  },
  PROVISIONINGS_REQUEST: (state) => {
    state.provisioningsStatus = types.LOADING
  },
  PROVISIONINGS_UPDATED: (state, provisionings) => {
    state.provisionings = provisionings
    state.provisioningsStatus = types.SUCCESS
  },
  REALMS_REQUEST: (state) => {
    state.realmsStatus = types.LOADING
  },
  REALMS_UPDATED: (state, realms) => {
    state.realms = realms
    state.realmsStatus = types.SUCCESS
  },
  ROLES_REQUEST: (state) => {
    state.rolesStatus = types.LOADING
  },
  ROLES_UPDATED: (state, roles) => {
    state.roles = roles
    state.rolesStatus = types.SUCCESS
  },
  ROUTED_NETWORKS_REQUEST: (state) => {
    state.routedNetworksStatus = types.LOADING
  },
  ROUTED_NETWORKS_UPDATED: (state, routedNetworks) => {
    state.routedNetworks = routedNetworks
    state.routedNetworksStatus = types.SUCCESS
  },
  SCANS_REQUEST: (state) => {
    state.scansStatus = types.LOADING
  },
  SCANS_UPDATED: (state, scans) => {
    state.scans = scans
    state.scansStatus = types.SUCCESS
  },
  SECURITY_EVENTS_REQUEST: (state) => {
    state.securityEventsStatus = types.LOADING
  },
  SECURITY_EVENTS_UPDATED: (state, securityEvents) => {
    let ref = {}
    for (let securityEvent of securityEvents) {
      ref[securityEvent.id] = Object.assign({}, securityEvent)
    }
    state.securityEvents = ref
    state.securityEventsStatus = types.SUCCESS
  },
  SOURCES_REQUEST: (state) => {
    state.sourcesStatus = types.LOADING
  },
  SOURCES_UPDATED: (state, sources) => {
    state.sources = sources
    state.sourcesStatus = types.SUCCESS
  },
  SWICTHES_REQUEST: (state) => {
    state.switchesStatus = types.LOADING
  },
  SWICTHES_UPDATED: (state, switches) => {
    state.switches = switches
    state.switchesStatus = types.SUCCESS
  },
  SWICTH_GROUPS_REQUEST: (state) => {
    state.switchGroupsStatus = types.LOADING
  },
  SWICTH_GROUPS_UPDATED: (state, switchGroups) => {
    state.switchGroups = switchGroups
    state.switchGroupsStatus = types.SUCCESS
  },
  SYSLOG_FORWARDERS_REQUEST: (state) => {
    state.syslogForwardersStatus = types.LOADING
  },
  SYSLOG_FORWARDERS_UPDATED: (state, syslogForwarders) => {
    state.syslogForwarders = syslogForwarders
    state.syslogForwardersStatus = types.SUCCESS
  },
  SYSLOG_PARSERS_REQUEST: (state) => {
    state.syslogParsersStatus = types.LOADING
  },
  SYSLOG_PARSERS_UPDATED: (state, syslogParsers) => {
    state.syslogParsers = syslogParsers
    state.syslogParsersStatus = types.SUCCESS
  },
  TENANTS_REQUEST: (state) => {
    state.tenantsStatus = types.LOADING
  },
  TENANTS_UPDATED: (state, tenants) => {
    state.tenants = tenants
    state.tenantsStatus = types.SUCCESS
  },
  TRAFFIC_SHAPING_POLICIES_REQUEST: (state) => {
    state.trafficShapingPoliciesStatus = types.LOADING
  },
  TRAFFIC_SHAPING_POLICIES_UPDATED: (state, trafficShapingPolicies) => {
    state.trafficShapingPolicies = trafficShapingPolicies
    state.trafficShapingPoliciesStatus = types.SUCCESS
  },
  WMI_RULES_REQUEST: (state) => {
    state.wmiRulesStatus = types.LOADING
  },
  WMI_RULES_UPDATED: (state, wmiRules) => {
    state.wmiRules = wmiRules
    state.wmiRulesStatus = types.SUCCESS
  },
  WRIX_LOCATIONS_REQUEST: (state) => {
    state.wrixLocationsStatus = types.LOADING
  },
  WRIX_LOCATIONS_UPDATED: (state, wrixLocations) => {
    state.wrixLocations = wrixLocations
    state.wrixLocationsStatus = types.SUCCESS
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
