require("indent_blankline").setup {
    char = "│",
    show_first_indent_level = true,
    filetype_exclude = {
        "startify", "dashboard", "dotooagenda", "log", "fugitive",
        "gitcommit", "packer", "vimwiki", "markdown", "json", "txt",
        "vista", "help", "todoist", "NvimTree", "peekaboo", "git",
        "TelescopePrompt", "undotree", "flutterToolsOutline", "" -- for all buffers without a file type
    },
    buftype_exclude = {"terminal", "nofile"},
    show_trailing_blankline_indent = false,
    show_current_context = true,
    context_patterns = {
        "class", "function", "method", "block", "list_literal", "selector",
        "^if", "^table", "if_statement", "while", "for", "type", "var",
        "import"
    }
}
-- vim.cmd("let g:indent_blankline_char = '│'")

-- vim.cmd("let g:indent_blankline_char_list = ['│']")

-- vim.cmd("let g:indent_blankline_show_trailing_blankline_indent = v:true")

-- vim.cmd("let g:indent_blankline_indent_level = 10")

-- vim.cmd("let g:indent_blankline_use_treesitter = v:true")

-- vim.cmd("let g:indent_blankline_filetype_exclude = ['dashboard']")

-- vim.cmd("let g:indent_blankline_show_end_of_line = v:true")
