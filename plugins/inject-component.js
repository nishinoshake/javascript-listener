import Vue from 'vue'
import BaseText from '@/components/base/BaseText'
import BaseCode from '@/components/base/BaseCode'
import BaseLink from '@/components/base/BaseLink'
import BaseLinkExternal from '@/components/base/BaseLinkExternal'
import BaseRect from '@/components/base/BaseRect'
import BasePage from '@/components/base/BasePage'
import BaseBlock from '@/components/base/BaseBlock'
import BaseSection from '@/components/base/BaseSection'
import BasePlayground from '@/components/base/BasePlayground'
import PrimaryTitle from '@/components/title/PrimaryTitle'
import SecondaryTitle from '@/components/title/SecondaryTitle'
import EventBlock from '@/components/event/EventBlock'
import EventSummary from '@/components/event/EventSummary'
import EventTitle from '@/components/event/EventTitle'
import EventCrumb from '@/components/event/EventCrumb'
import CodeBlock from '@/components/CodeBlock'
import Clipboard from '@/components/Clipboard'
import PageNavigation from '@/components/PageNavigation'

// 行儀は悪いけど毎回読み込むのが面倒なので
Vue.mixin({
  components: {
    BaseText,
    BaseCode,
    BaseLink,
    BaseLinkExternal,
    BaseRect,
    BasePage,
    BaseBlock,
    BaseSection,
    BasePlayground,
    PrimaryTitle,
    SecondaryTitle,
    EventBlock,
    EventSummary,
    EventTitle,
    EventCrumb,
    CodeBlock,
    Clipboard,
    PageNavigation
  }
})
