<template>
  <pf-config-view
    :isLoading="isLoading"
    :disabled="isLoading"
    :form="getForm"
    :model="form"
    :vuelidate="$v.form"
    @validations="formValidations = $event"
    @save="save"
  >
    <template slot="header" is="b-card-header">
      <h4 class="mb-0">
        <span>{{ $t('Inline') }}</span>
      </h4>
    </template>
    <template slot="footer">
      <b-card-footer @mouseenter="$v.form.$touch()">
        <pf-button-save :disabled="invalidForm" :isLoading="isLoading">
          <template>{{ $t('Save') }}</template>
        </pf-button-save>
        <b-button :disabled="isLoading" class="ml-1" variant="outline-primary" @click="init()">{{ $t('Reset') }}</b-button>
      </b-card-footer>
    </template>
  </pf-config-view>
</template>

<script>
import pfConfigView from '@/components/pfConfigView'
import pfButtonSave from '@/components/pfButtonSave'
import {
  pfConfigurationInlineViewFields as fields
} from '@/globals/configuration/pfConfigurationInline'

const { validationMixin } = require('vuelidate')

export default {
  name: 'InlineView',
  mixins: [
    validationMixin
  ],
  components: {
    pfConfigView,
    pfButtonSave
  },
  data () {
    return {
      form: {}, // will be overloaded with the data from the store
      formValidations: {}, // will be overloaded with data from the pfConfigView
      options: {}
    }
  },
  validations () {
    return {
      form: this.formValidations
    }
  },
  computed: {
    isLoading () {
      return this.$store.getters['$_bases/isLoading']
    },
    invalidForm () {
      return this.$v.form.$invalid || this.$store.getters['$_bases/isWaiting']
    },
    getForm () {
      return {
        labelCols: 3,
        fields: fields(this)
      }
    }
  },
  methods: {
    init () {
      this.$store.dispatch('$_bases/optionsInline').then(options => {
        this.options = options
        this.$store.dispatch('$_bases/getInline').then(form => {
          this.form = form
        })
      })
    },
    save () {
      this.$store.dispatch('$_bases/updateInline', this.form)
    }
  },
  created () {
    this.init()
  }
}
</script>
