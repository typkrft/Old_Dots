local vim = vim
vim.o.completeopt = "menu,menuone,noselect"

require "compe".setup {
  enabled = true,
  autocomplete = true,
  preselect = "enable",
  throttle_time = 80,
  source_timeout = 200,
  incomplete_delay = 400,
  allow_prefix_unmatch = false,
  with_text = false,
  source = {
    buffer = {kind = "﬘", true},
    luasnip = {kind = "﬌", true},
    nvim_lsp = true,
    nvim_lua = true,    
    path = true,
    calc = true,
    ultisnips = true,
    vsnip = false,
    spell = true,
    tags = true
  }
}
