-- V I M  O P T S
vim.opt.rnu = false
vim.opt.clipboard:prepend {"unnamed"}

-- M O D U L E S
-- Snippets
require('plugins.luasnip')
-- Additional Server Setups
require('plugins.lsp-servers')
-- Access to Packer at all times
require('pluginlist')
-- Colorizer
require('plugins.colorizer')
-- Indentation Guides
require('plugins.indent')
-- Treesitter
require('plugins.treesitter')
