def cms_selector(lst, txt):
  results = [i for i in lst if txt in i]
  return sorted(results)


lst = ["WordPress", "Joomla", "Drupal", "Magento" ]
txt = "ru"
cms_selector(lst, txt)