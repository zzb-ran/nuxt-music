import {render, watch} from "vue"

export default function useLoadingFetch(url: string, callback: Function) {
  const {public: {apiBase}} = useRuntimeConfig()
  let {pending, data}: {pending: globalThis.Ref<boolean>, data:globalThis.Ref<any>} = useFetch(apiBase + url)
  if(pending.value) {
    const VNode = h("div", {
      style: {
        width: "calc(100% - var(--v-layout-left))",
        height: "calc(100% - var(--v-layout-top))",
        position: "absolute",
        top: "var(--v-layout-top)",
        left: "var(--v-layout-left)",
        backgroundColor: "rgba(1, 1, 1, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      textContent: "Loading Data..."
    })
    render(VNode, document.querySelector(".v-main") as HTMLElement)
  }

  watch(data, (newData) => {
    render(null, document.querySelector(".v-main") as HTMLElement)
    callback(newData)
  })
}