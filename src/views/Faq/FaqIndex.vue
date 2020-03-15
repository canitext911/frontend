<template>
  <ContentWrapper class="cit-faq-index">
    <Header>Frequently Asked Questions</Header>
    <h3>What is text-to-911?</h3>
    <p>
      Text-to-911 is the ability to send a text message in the case of an emergency as an alternate
      method to calling 911. It should be used as a last resort because of its limited availability
      and features.
    </p>
    <h3>Why would I text 911?</h3>
    <p>
      If you are in a dangerous situation where you are unable to discreetly make a phone call or
      have a speech or hearing impairment, texting 911 would be your best option.
    </p>
    <h3>Does my carrier support texting 911?</h3>
    <p>
      The FCC requires all wireless carriers to support this service. Verizon, AT&amp;T,
      Sprint, and T-Mobile have indicated support. However, your local emergency call center
      must also have this technology deployed. You may be able to determine some of this
      information through our website, but always check with your carrier or local call center
      to confirm support.
    </p>
    <h3>Do I need an active phone plan?</h3>
    <p>
      Yes. Unlike calling 911, texting 911 requires an active phone plan.
    </p>
    <h3>What happens if my local call center doesn't support texting 911?</h3>
    <p>
      If your text was unable to be delivered to your call center due to lack of support, you will
      receive an immediate automated "bounce-back" message from your provider informing you of such.
      In such a case, make sure to contact 911 another way.
    </p>
    <h3>How does my location get sent if I text 911?</h3>
    <p>
      Unlike calling 911, texting 911 generally does not provide call center
      operators with your location, and any information provided is not as accurate.
      Be sure to indicate your location in your text message, if possible.
    </p>
    <h3>What are some limitations of text-to-911?</h3>
    <p>
      Your location will not be sent with a text message. You also cannot send photos, videos,
      or any other media. Texting may not go through if you have spotty service or are roaming, and
      you must have an active phone plan.
      <a href="https://gcn.com/articles/2013/06/26/text-to-911-call-when-you-can-text-when-you-must.aspx"
         target="_blank">Call when you can, text when you must.</a>
    </p>
    <h3>Who runs this website?</h3>
    <p>
      CANiTEXT911 is an independently-run informational website by
      <a href="https://diglactic.com"
         target="_blank">
        Diglactic
      </a>
      and is not affiliated with any government entity. Our hope is to raise awareness and increase public safety.
    </p>
    <p>
      We're open-source!
      <a target="_blank"
         href="https://github.com/CanIText911">
        Contributions are welcome.
      </a>
    </p>
  </ContentWrapper>
</template>
<script>
import Header from '@/components/Header';
import ContentWrapper from '@/components/ContentWrapper';

export default {
  name: 'FaqIndex',
  metaInfo: {
    title: 'Frequently Asked Questions',
  },
  components: { ContentWrapper, Header },
};
</script>

<style lang="scss">
@import '~@scss/index.scss';

.cit-faq-index {
  padding-bottom : 5rem;

  h3 {
    margin-top : 3rem;
    color      : $cit-black;
  }
}
</style>
