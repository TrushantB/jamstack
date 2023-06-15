const refactorEco = (data) => {
  return {
    data: data,
    "ecoBanner": {
      "heading": data?.banner?.heading,
      "description": data?.banner?.description,
      "title": data?.banner?.title
    },
    "accordinData": {
      "heading": data?.accordinData?.heading,
      "accordin": data?.accordinData?.accordin?.map((item) => ({
        label: item.label,
        content: item.content,
        animationType: item.animationType
      }))
    },
    "ConnectChoose": {
      "heading": data?.ConnectChoose?.heading,
      "description": data?.ConnectChoose?.description,
      "buttonLabel": data?.ConnectChoose?.buttonLabel,
      "type": data?.ConnectChoose?.type,
      "label": data?.ConnectChoose?.label,
      "size": data?.ConnectChoose?.size
    }
  }
}

export { refactorEco }