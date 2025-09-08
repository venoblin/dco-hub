import { load } from './utils/index.js'
import { getSingleGuide } from './service/guidesService.js'

const guide = await load(() => getSingleGuide(GUIDE_ID))

console.log(guide)
