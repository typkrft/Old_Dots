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
  color_scheme = "wezterm-wal",
  font = wezterm.font("Iosevka Nerd Font"),
  send_composed_key_when_left_alt_is_pressed=false,
  send_composed_key_when_right_alt_is_pressed=true,
  use_ime = false,
  leader = { key="a", mods="CTRL", timeout_milliseconds=1000 },
  -- keys = {
    -- Figure out how to move left and right in terminal with cmd and opt
  -- }
  -- wezterm.add_to_config_reload_watch_list(home.."/.cache/wal"),
}

