export const useDePlayerStore = defineStore('dePlayer-settings', () => {
  const commentShadow = ref<'border' | 'shadow' | 'none'>('border')
  const commentWeight = ref<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>(400)
  const commentHeight = ref<25 | 50 | 75 | 100>(100)
  const commentOpacity = ref<number>(100)
  const commentSize = ref<number>(25)

  const [showComment, toggleShowComment] = useToggle(true)

  return { commentShadow, commentWeight, commentHeight, commentOpacity, commentSize, showComment, toggleShowComment }
}, {
  persist: true,
})