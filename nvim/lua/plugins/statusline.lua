local vim = vim

-- U S E R  A D D E D  -  S T A R T
local function modes() 
  
  local m = string.upper(vim.api.nvim_eval('mode()'))
  if m == 'no' then m = "OP" end
  if m == '' then m = "VB" end
  if m == '' then m = "SB" end
  return m
end 

-- E N D E D

local function clock()
  return " " .. os.date("%H:%M")
end

local function lsp_progress()
  local messages = vim.lsp.util.get_progress_messages()
  if #messages == 0 then
    return
  end
  local status = {}
  for _, msg in pairs(messages) do
    table.insert(status, (msg.percentage or 0) .. "%% " .. (msg.title or ""))
  end
  local spinners = {
    "⠋",
    "⠙",
    "⠹",
    "⠸",
    "⠼",
    "⠴",
    "⠦",
    "⠧",
    "⠇",
    "⠏"
  }
  local ms = vim.loop.hrtime() / 1000000
  local frame = math.floor(ms / 120) % #spinners
  return table.concat(status, " | ") .. " " .. spinners[frame + 1]
end

vim.cmd "autocmd User LspProgressUpdate let &ro = &ro"

require("lualine").setup {
  options = {
    theme = "tokyonight",
    icons_enabled = true,
    section_separators = {"", ""},
    component_separators = {"", ""}
    -- section_separators = {"", ""},
    -- component_separators = {"", ""}
  },
  sections = {
    lualine_a = {modes},
    lualine_b = {"branch"},
    lualine_c = {{"diagnostics", sources = {"nvim_lsp"}}, "filename"},
    lualine_x = {"filetype", lsp_progress},
    lualine_y = {clock}
  },
  inactive_sections = {
    lualine_a = {},
    lualine_b = {},
    lualine_c = {},
    lualine_x = {},
    lualine_y = {},
    lualine_z = {}
  },
  extensions = {"nvim-tree"}
}
