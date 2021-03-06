local g = vim.g

g.mapleader = " "

-- Transparent background
g.tokyonight_transparent = false

-- extra plugins to install (must only be strings)
g.kyoto_extra_plugins = {
  "L3MON4D3/LuaSnip",
  "rafamadriz/friendly-snippets",
  "norcalli/nvim-colorizer.lua",
  "lukas-reineke/indent-blankline.nvim",
  "lukas-reineke/format.nvim"
}

-- uncomment this out if you are experiencing issues with nvim-tree.lua
-- g.nvim_tree_git_hl = 0
-- g.nvim_tree_gitignore = 0
-- g.nvim_tree_show_icons = {
--   git = 0,
--   folders = 1,
--   files = 1
-- }
