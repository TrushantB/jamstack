import { urlForImage } from '@/lib/sanity.image'

const refactorCaseStudy = (data) => {
  return {
    heading: data?.caseStudy?.heading || "",
    description: data?.caseStudy?.description || "",
    itemList: data?.caseStudy?.itemList?.map((item) => ({
      label: item.label,
      href: item?.href || "",
      percentageList: item.percentageList?.map((percentageItem) => ({
        percentage: percentageItem.percentage,
        description: percentageItem.description,
      })) || [],
    })) || [],
    hasIcon: data?.caseStudy?.hasIcon || "",
    label: data?.caseStudy?.label || "",
    icon: data?.caseStudy?.icon || "",
    href: data?.caseStudy?.href || '',
  }
}

export { refactorCaseStudy }