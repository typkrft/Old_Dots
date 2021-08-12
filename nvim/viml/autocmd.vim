" Turn off line numbers and start insert mode in terminal
autocmd TermOpen * setlocal nonumber norelativenumber | startinsert

" Set indenting for python
autocmd Filetype python setlocal expandtab tabstop=4 shiftwidth=4 softtabstop=4

" Set all .zsh files to sh so LSP 'works' 
au FileType zsh setlocal ft=sh

" Wilder now has it's own config
" call wilder#enable_cmdline_enter()
" call wilder#set_option('modes', ['/', '?'])
