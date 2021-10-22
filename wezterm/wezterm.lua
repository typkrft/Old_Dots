-- W E Z T E R M
local wezterm = require 'wezterm';

-- Test Tab Title
wezterm.on("format-tab-title", function(tab, tabs, panes, config, hover, max_width)
  local pane_title = tab.active_pane.title
  local user_title = tab.active_pane.user_vars.panetitle

  if user_title ~= nil and #user_title > 0 then
    pane_title = user_title
  end

  return {
    {Background={Color="blue"}},
    {Foreground={Color="white"}},
    {Text=" " .. pane_title .. " "},
  }
end)

-- TODO: Learn How to name window, but not tab
-- TODO: Remove Title Bar
-- TODO: Live Reload
-- TODO: Change Colorschemes with Wal
-- TODO: Setup Leader Key
local home = wezterm.home_dir;
wezterm.add_to_config_reload_watch_list(home.."/.cache/wal/wezterm-wal.toml")
return {
  -- Wal Colorscheme NOTE: you could definte multiple colorschemes in this file 
  color_scheme_dirs = {home.."/.cache/wal"},
  hide_tab_bar_if_only_one_tab = true,
  color_scheme = "wezterm-wal",
  font = wezterm.font_with_fallback({"Iosevka Nerd Font","Apple Color Emoji"}),
  font_size = 18.0,
  freetype_interpreter_version = 40,
  font_shaper = "Harfbuzz",
  send_composed_key_when_left_alt_is_pressed=false,
  send_composed_key_when_right_alt_is_pressed=true,
  native_macos_fullscreen_mode = true,
  allow_square_glyphs_to_overflow_width = "Never",
  adjust_window_size_when_changing_font_size = false,
  use_ime = false,
  window_decorations = "RESIZE",
  window_padding = {
    left = 12,
    -- This will become the scrollbar width if you have enabled the scrollbar!
    right = 12,
    top = 12,
    bottom = 12,
  },
  leader = { key="a", mods="CTRL", timeout_milliseconds=1000 },
  -- keys = {
    -- Figure out how to move left and right in terminal with cmd and opt
  -- }
  -- wezterm.add_to_config_reload_watch_list(home.."/.cache/wal"),
  -- Test
  	font_rules={
		{
			-- Italic
			italic=true,
			font = wezterm.font_with_fallback( {
				{family="Iosevka Nerd Font", italic=true},
				"Apple Color Emoji",
			}),
		},
		{
			-- Bold
			intensity="Bold", italic=false,
			font = wezterm.font_with_fallback( {
				{family="Iosevka Nerd Font", weight="Bold"},
				"Apple Color Emoji",
			}),
		},
		{
			-- Bold Italic
			intensity="Bold", italic=true,
			font = wezterm.font_with_fallback( {
				{family="Iosevka Nerd Font", weight="Bold", italic=true},
				"Apple Color Emoji",
			}),
		},
	},

	-- Font options
	harfbuzz_features = {
		"dlig=1", -- Ligatures
    -- "calt=1",
    -- "clig=1",
    -- "curs=1",
    -- "dist=1",
    -- "kern=1",
    -- "liga=1",
		-- "ss01", -- Single-story a
		-- "ss02", -- Single-story g
		-- "ss03", -- Simplified f
		-- "ss04", -- Simplified i
		-- "ss05", -- Simplified l
		-- "ss06", -- Simplified
		-- "ss07", -- Simplified italic diagonals (kwxyz)
		-- "ss08", -- No-serif L and Z
		-- "ss09", -- Simplified 6 and 9
		-- "ss10", -- Dotted 0
		-- "ss11", -- Simplified 1
		-- "ss12", -- Simplified @
    -- "calt=1",
    -- "clig=1"
	},

	-- Font rendering
	freetype_render_target = "Light",

	-- Cursor style
	default_cursor_style = "BlinkingBar",

	-- Hide tab bar when there is only a single tab
	hide_tab_bar_if_only_one_tab = true,

	-- Transparency
	window_background_opacity = 1.0,

  scrollback_lines = 10000,

}


