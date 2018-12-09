<template>
  <ContentWrapper class="cit-landing-wizard">
    <Stepper v-model="currentStep"
             @stepAnimationEnd="handleStepAnimationEnd">
      <StepperStep class="cit-landing-wizard__step"
                   title="Choose Your Carrier"
                   :hasNext="carrier !== null"
                   @next="handleNextStep">
        <ListSelect v-model="carrier" :items="$options.Carrier">
          <template slot-scope="{ item: { name } }">
            {{ name }}
          </template>
        </ListSelect>
      </StepperStep>
      <StepperStep class="cit-landing-wizard__step"
                   title="Do You Have An Active Phone Plan?"
                   hasPrev
                   :hasNext="carrierPlanStatus !== null"
                   @prev="handlePrevStep"
                   @next="handleNextStep">
        <ListSelect v-model="carrierPlanStatus" :items="$options.CarrierPlanStatus">
          <template slot-scope="{ item: { name } }">
            {{ name === 'Active' ? 'Yes' : 'No' }}
          </template>
        </ListSelect>
      </StepperStep>
      <StepperStep class="cit-landing-wizard__step"
                   title="Enter Your Zip Code"
                   nextActionText="Check Availability"
                   :hasNext="zipCode !== ''"
                   hasPrev
                   @prev="handlePrevStep"
                   @next="handleSearch">
        <Input placeholder="Enter your ZIP code..."
               type="number"
               :tabindex="-1"
               isRequired
               ariaLabel="Enter ZIP code"
               ref="ZipInput"
               class="cit-landing-wizard__zip-input"
               @keydown.enter.native="handleSearch"
               v-model="zipCode"/>
      </StepperStep>
    </Stepper>
  </ContentWrapper>
</template>
<script>
import Input from '@/components/Input';
import Button from '@/components/Button';
import Stepper from '@/components/Stepper';
import StepperStep from '@/components/StepperStep';
import RouteNames from '@/router/names';
import ContentWrapper from '@/components/ContentWrapper';
import { Carrier, CarrierPlanStatus } from '@/lib/carrier';
import ListSelect from '@/components/ListSelect';
import Header from '../../components/Header';

export default {
  name: 'LandingWizard',
  data() {
    return {
      currentStep: 1,
      zipCode: '',
      carrier: null,
      carrierPlanStatus: null,
    };
  },
  Carrier,
  CarrierPlanStatus,
  methods: {
    handleNextStep() {
      this.currentStep += 1;
    },
    handlePrevStep() {
      this.currentStep -= 1;
    },
    isFormValid() {
      return this.zipCode !== '' && this.carrier !== null && this.carrierPlanStatus !== null;
    },
    handleSearch() {
      if (this.isFormValid) {
        this.$router.push({
          name: RouteNames.Search.Result,
          params: {
            search: this.zipCode,
          },
          query: {
            carrierPlanStatus: this.carrierPlanStatus,
            carrier: this.carrier,
          },
        });
      }
    },
    handleStepAnimationEnd() {
      if (this.currentStep === 3) {
        this.$refs.ZipInput.focus();
      }
    },
  },
  metaInfo: {
    title: 'Wizard',
  },
  components: {
    Header,
    ListSelect,
    ContentWrapper,
    StepperStep,
    Stepper,
    Button,
    Input,
  },
};
</script>
<style lang="scss">
.cit-landing-wizard {
  padding: 2rem 0;

  &__subtitle {
    font-size: 2rem;
  }

  &__zip-input {
    margin: 2rem 0;
  }
}
</style>
