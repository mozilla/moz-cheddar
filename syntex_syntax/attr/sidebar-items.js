initSidebarItems({"enum":[["InlineAttr",""],["IntType",""],["ReprAttr",""],["StabilityLevel","The available stability levels."]],"fn":[["cfg_matches","Tests if a cfg-pattern matches the cfg set"],["contains","Check if `needle` occurs in `haystack` by a structural comparison. This is slightly subtle, and relies on ignoring the span included in the `==` comparison a plain MetaItem."],["contains_name",""],["find_crate_name",""],["find_deprecation","Find the deprecation attribute. `None` if none exists."],["find_export_name_attr","Find the value of #[export_name=*] attribute and check its validity."],["find_inline_attr","Determine what `#[inline]` attribute is present in `attrs`, if any."],["find_repr_attrs","Parse #[repr(...)] forms."],["find_stability","Find the first stability attribute. `None` if none exists."],["first_attr_value_str_by_name",""],["is_used",""],["last_meta_item_value_str_by_name",""],["mark_used",""],["mk_attr_id",""],["mk_attr_inner","Returns an inner attribute with the given value."],["mk_attr_outer","Returns an outer attribute with the given value."],["mk_list_item",""],["mk_name_value_item",""],["mk_name_value_item_str",""],["mk_sugared_doc_attr",""],["mk_word_item",""],["requests_inline","True if `#[inline]` or `#[inline(always)]` is present in `attrs`."],["require_unique_names",""],["sort_meta_items",""]],"struct":[["Deprecation",""],["RustcDeprecation",""],["Stability","Represents the #[stable], #[unstable] and #[rustc_deprecated] attributes."]],"trait":[["AttrMetaMethods",""],["AttributeMethods",""],["AttributesExt",""],["ThinAttributesExt",""],["WithAttrs","A cheap way to add Attributes to an AST node."]],"type":[["ThinAttributes","A list of attributes, behind a optional box as a space optimization."]]});