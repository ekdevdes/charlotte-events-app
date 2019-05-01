export default {
  methods: {
    theme(baseClass, eventType) {
      if(eventType === "Next Week") {
        return `${baseClass}--secondary`
      } else if (eventType === "Favorites") {
        return `${baseClass}--tertiary`
      } else {
        return ''
      }
    }
  }
}
