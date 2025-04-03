p = {x=64, y=64, ang=0, dx=0, dy=0, bullets={}} 
asteroids = {}

function spawn_asteroid()
 add(asteroids, {x=flr(rnd(128)), y=flr(rnd(128)), dx=rnd(2)-1, dy=rnd(2)-1, size=3})
end

for i=1,5 do spawn_asteroid() end

function update_player()
 if btn(1) then p.ang -= 0.05 end
 if btn(1) then p.ang += 0.05 end
 if btn(2) then
  p.dx += cos(p.ang) * 0.2
  p.dy += sin(p.ang) * 0.2
 end
 p.x = (p.x + p.dx) % 128
 p.y = (p.y + p.dy) % 128

 if btnp(4) then
  add(p.bullets, {x=p.x, y=p.y, dx=cos(p.ang)*2, dy=sin(p.ang)*2, life=50})
 end
end

function update_bullets()
 for b in all(p.bullets) do
  b.x += b.dx
  b.y += b.dy
  b.life -= 1
  if b.life <= 0 then del(p.bullets, b) end
 end
end

function update_asteroids()
 for a in all(asteroids) do
  a.x = (a.x + a.dx) % 128
  a.y = (a.y + a.dy) % 128
 end
end

function check_collisions()
 for b in all(p.bullets) do
  for a in all(asteroids) do
   if abs(b.x - a.x) < 4 and abs(b.y - a.y) < 4 then
    del(asteroids, a)
    del(p.bullets, b)
    spawn_asteroid()
   end
  end
 end
end

function _update()
 update_player()
 update_bullets()
 update_asteroids()
 check_collisions()
end

function _draw()
 cls()
 circ(p.x, p.y, 2, 7)
 for b in all(p.bullets) do rectfill(b.x, b.y, b.x+1, b.y+1, 8) end
 for a in all(asteroids) do circ(a.x, a.y, a.size * 2, 6) end
end
