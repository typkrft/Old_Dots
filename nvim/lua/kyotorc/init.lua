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

-- Navigate lines like macOS
-- Depends on what arbitrary string cmd/alt + left/right
-- are mapped to in kitty.conf
-- CMD
vim.api.nvim_set_keymap('n', 'S4', '0', { noremap = true })
vim.api.nvim_set_keymap('n', '12', '$', { noremap = true })
vim.api.nvim_set_keymap('i', 'S4', '<Esc>0i', { noremap = true })
vim.api.nvim_set_keymap('i', '12', '<Esc>$a', { noremap = true })
-- ALT
vim.api.nvim_set_keymap('n', 'S591', 'b', { noremap = true })
vim.api.nvim_set_keymap('n', 'Q949', 'w', { noremap = true })
vim.api.nvim_set_keymap('i', 'S591', '<Esc>bi', { noremap = true })
vim.api.nvim_set_keymap('i', 'Q949', '<Esc>wwi', { noremap = true })

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
