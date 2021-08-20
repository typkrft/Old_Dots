local vim = vim
local g = vim.g
-- V I M  O P T S
-- turn off relative numbers
vim.opt.rnu = false
-- Use System Clipboard
vim.opt.clipboard:prepend {"unnamed", "unnamedplus"}
-- Clear Highlighting wiht leader space, which is space space currently
vim.api.nvim_set_keymap('n', '<Leader><Space>', ':noh<CR>', { noremap = true, silent = true })
-- Create file if it doesn't exist with <leader>gf
vim.api.nvim_set_keymap('n', '<leader>gf', ':e <cfile><cr>', { noremap = true })
-- Wrap through lines in insert mode
vim.opt.whichwrap = "<>hl[]"
-- Syntax Folding
-- vim.opt.syntax = "enable"
-- vim.opt.foldmethod = "indent"


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
-- Format
require('plugins.format')
-- Wilder
vim.cmd("source ~/.config/nvim/viml/wilder.vim")
