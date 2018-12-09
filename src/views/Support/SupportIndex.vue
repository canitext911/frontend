<template>
  <ContentWrapper class="cit-support"
                  isCentered>
    <Header>Contact</Header>
    <p>
      Send any questions or report inaccuracies to
      <a href="mailto:support@canitext911.us">support@canitext911.us</a>
    </p>
  </ContentWrapper>
</template>

<script>
import ContentWrapper from '@/components/ContentWrapper';
import Header from '@/components/Header';

export default {
  name: 'SupportIndex',
  metaInfo: {
    title: 'Contact',
  },
  components: { Header, ContentWrapper },
};
</script>
