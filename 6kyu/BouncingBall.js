// DESCRIPTION:
// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
//solutions

// child playing on the floor from height h from ground 
// throwing ball on ground ball bounces one third of the h 
// mother is in floor the window from ground of height 1.5m from ground // how many times she sees the ball bouncing in front of her
// one time on falling from above that is fixed
function bouncingBall(h,  bounce,  window) {
    if(bounce >0.99 || bounce <0 || window>=h){
      return -1;
    }
    else{
          let ballHeight = h*bounce;
        let ballBounces =0 ;
      while(ballHeight>=window){
         
          ballHeight*= bounce;
          ballBounces++
      }
      if(window ==1){
      return (ballBounces);
      
    }
        return (ballBounces*2)+1
    
  }
}
  
//second solution

function bouncingBall(h,  bounce,  window) {
    if(bounce >0.99 || bounce <0 || window>=h){
      return -1;
    }
    
          let ballHeight = h*bounce;
        let ballBounces =0 ;
      while(ballHeight>=window){
         
          ballHeight*= bounce;
          ballBounces++
      }
     
      if(window ==1 && bounce <=0.5){
      return ballBounces;
      
    }return (ballBounces*2)+1;
    
  
  }