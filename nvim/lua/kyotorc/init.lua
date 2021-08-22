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
-- CMD + Left/Right  Sd1234
vim.api.nvim_set_keymap('n', 'Zd2e4fdd', '0', { noremap = true })
vim.api.nvim_set_keymap('n', 'Zd2sdf2', '$', { noremap = true })
vim.api.nvim_set_keymap('i', 'Zd2e4fdd', '<Esc>0i', { noremap = true })
vim.api.nvim_set_keymap('i', 'Zd2sdf2', '<Esc>$a', { noremap = true })
vim.api.nvim_set_keymap('c', 'Zd2e4fdd', '<C-B>', {})
vim.api.nvim_set_keymap('c', 'Zd2sdf2', '<C-E>', {})
-- CMD + Backspace
vim.api.nvim_set_keymap('n', 'Y223r', 'a<C-u><Esc>', { noremap = true })
vim.api.nvim_set_keymap('i', 'Y223r', '<C-u>', { noremap = true })
-- CMD (+Shift) + Z
vim.api.nvim_set_keymap('n', 'Y2e44', 'u', { noremap = true })
vim.api.nvim_set_keymap('i', 'Y2e44', '<Esc>ui', { noremap = true })
vim.api.nvim_set_keymap('n', 'Y2e4s', '<C-r>', { noremap = true })
vim.api.nvim_set_keymap('i', 'Y2e4s', '<Esc><C-u>i', { noremap = true })
-- CMD + Up/Down
vim.api.nvim_set_keymap('n', 'Zd2e4s', 'gg0', { noremap = true })
vim.api.nvim_set_keymap('i', 'Zd2e4s', '<Esc>gg0i', { noremap = true })
vim.api.nvim_set_keymap('n', 'Zd2e4d', 'G$', { noremap = true })
vim.api.nvim_set_keymap('i', 'Zd2e4d', '<Esc>G$a', { noremap = true })

-- ALT + Left/Right
vim.api.nvim_set_keymap('n', 'Zd2e4rfdd', 'b', { noremap = true })
vim.api.nvim_set_keymap('n', 'Zd2e4wd', 'w', { noremap = true })
vim.api.nvim_set_keymap('i', 'Zd2e4rfdd', '<Esc>bi', { noremap = true })
vim.api.nvim_set_keymap('i', 'Zd2e4wd', '<Esc>wwi', { noremap = true })
-- ALT + Backspace
vim.api.nvim_set_keymap('n', 'Y2e43', 'dvb', { noremap = true })
vim.api.nvim_set_keymap('i', 'Y2e43', '<Esc>dvbi', { noremap = true })


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
