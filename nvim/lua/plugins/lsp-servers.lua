-- L S P  C O N F I G S
local lspconfig = require'lspconfig'
-- DENO
local capabilities = vim.lsp.protocol.make_client_capabilities()
capabilities.textDocument.completion.completionItem.snippetSupport = true
capabilities.textDocument.completion.completionItem.resolveSupport = {
  properties = {
    'documentation',
    'detail',
    'additionalTextEdits',
  }
}
lspconfig.denols.setup{
  root_dir = lspconfig.util.root_pattern('*.js'),
  capabilities = capabilities,
}
