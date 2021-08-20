-- W E Z T E R M

-- TODOS:
-- Learn How to name window, but not tab
-- Remove Title Bar
-- Live Reload
-- Change Colorschemes with Wal
local wezterm = require 'wezterm';
local home = wezterm.home_dir;
wezterm.add_to_config_reload_watch_list(home.."/.cache/wal/wezterm-wal.toml")
return {
  -- Wal Colorscheme NOTE: you could definte multiple colorschemes in this file 
  color_scheme_dirs = {home.."/.cache/wal"},
  hide_tab_bar_if_only_one_tab = true,
  color_scheme = "wezterm-wal",
  font = wezterm.font_with_fallback({"Iosevka Nerd Font","Apple Color Emoji"}),
  font_size = 14.0,
  freetype_interpreter_version = 3,
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
    bottom = 0,
  },
  leader = { key="a", mods="CTRL", timeout_milliseconds=1000 },
  -- keys = {
    -- Figure out how to move left and right in terminal with cmd and opt
  -- }
  -- wezterm.add_to_config_reload_watch_list(home.."/.cache/wal"),
}


